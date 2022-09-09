const route = require('express').Router();
const { createWorker } = require('tesseract.js');
const multer = require('multer');
const uuid = require('uuid').v4;
const renderTemplate = require('../lib/renderTemplate');
const GrannyProfile = require('../views/GrannyProfile');
const { Granny, Album } = require('../../db/models');
const { checkSession } = require('../middleware/checkSession');
const { s3Uploadv2, s3Uploadv3 } = require('../../s3');

route.get('/', checkSession, async (req, res) => {
  try {
    const { session } = req;
    const album = await Album.findAll({
      include: [{
        model: Granny,
        where: { username: session.user },
      }],
    });
    renderTemplate(GrannyProfile, { album, session }, res);
  } catch (err) {
    console.log(err);
  }
});

//! ==============================================================   CLOUD ===============================================================

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './images');
//   },
//   filename: (req, file, cb) => {
//     const { originalname } = file;
//     cb(null, `${uuid()}--${originalname}`);
//   },
// });

const storage = multer.memoryStorage();
let readyFile;
const fileFilter = (req, file, cb) => {
  if (file.mimetype.split('/')[0] === 'image') {
    readyFile = file.mimetype.split('/')[0];
    cb(null, true);
  } else {
    cb(new Error('Wrong file type'), false);
  }
};

// const upload = multer({ storage: filetorageEngine });

// route.post('/upload', upload.array('images'), (req, res) => {
//   console.log(req.files, '😁😁😁😁😁');
//   res.send('File sent');
// });

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 4000000, files: 10 },
}); // file limited to only 4mb and only 10 images could be uploaded
const worker = createWorker({
  logger: (m) => console.log(m),
});

route.post('/upload', upload.array('images'), async (req, res) => {
  try {
    const result = await s3Uploadv2(req.files[0]);
    console.log(result);
    const user = await Granny.findOne({ where: { username: req.session.user } });
    // const image = req.body.imglink;

    // result.map(async (image) => {
    await worker.load();
    await worker.loadLanguage('rus');
    await worker.initialize('rus');
    const { data: { text } } = await worker.recognize(result.Location);
    const newPhoto = await Album.create({ imglink: result.Location, imgText: text, grannyId: user.id });

    console.log(newPhoto);
    await worker.terminate();
    // });

    res.redirect('/profile');
  } catch (err) { console.log(err); }
});

// route.post('/upload', upload.array('images'), async (req, res) => {
//   try {
//     const result = await s3Uploadv3(req.files);

//     console.log(result);
//     return res.json({ message: 'success' });
//   } catch (err) { console.log(err); }
// });

route.use(async (error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_SIZE') {
      return res.send(`File is too large. You can only upload upto ${(upload.limits.fileSize) / 1000000} MB`);
    }
    if (error.code === 'LIMIT_FILE_COUNT') {
      return res.send(`You can only upload up to ${upload.limits.files} files`);
    }
    if (error.code === 'LIMIT_UNEXPECTED_FILE') {
      return res.send('You can only upload img files');
    }
  }
});

//! =============================================================================================================================

// const worker = createWorker({
//   logger: (m) => console.log(m),
// });

// route.post('/', async (req, res) => {
//   // console.log(req.body);
//   try {
//     const user = await Granny.findOne({ where: { username: req.session.user } });
//     const image = req.body.imglink;
//     await worker.load();
//     await worker.loadLanguage('rus');
//     await worker.initialize('rus');
//     const { data: { text } } = await worker.recognize(image);
//     console.log(text);
//     const newPhoto = await Album.create({ imglink: image, imgText: text, grannyId: user.id });
//     await worker.terminate();
//     res.redirect('/profile');
//   } catch (error) {
//     console.log(error);
//   }
// });

module.exports = route;

//* lets get the all the data from the database and display cards
//* add to the database from the input
