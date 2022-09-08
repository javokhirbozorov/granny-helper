require('dotenv').config();
const route = require('express').Router();

const multer = require('multer');
const uuid = require('uuid').v4;
const renderTemplate = require('../lib/renderTemplate');
const GrannyProfile = require('../views/GrannyProfile');
const { Granny, Album } = require('../../db/models');
const { checkSession } = require('../middleware/checkSession');
const { s3Uploadv2 } = require('../aws/s3Service');

route.get('/', checkSession, async (req, res) => {
  try {
    const { session } = req;
    console.log(session);
    const album = await Album.findAll({
      include: [{
        model: Granny,
        where: { username: session.user },
      }],
    });
    console.log(album);
    renderTemplate(GrannyProfile, { album, session }, res);
  } catch (err) {
    console.log(err);
  }
});
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    const { originalname } = file;
    cb(null, `${uuid()}-${originalname}`);
  },
});

// const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.split('/')[0] === 'image') {
    cb(null, true);
  } else {
    cb(new multer.MulterError('LIMIT_UNEXPECTED_FILE'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5000000,
    files: 2,
  },
});

route.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    if (error.code === 'LIMIT_FILE_COUNT') {
      return res.status(400).json({
        message: 'Too many files 😁😁😁',
      });
    } if (error.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        message: 'File is too big!',
      });
    } if (error.code === 'LIMIT_UNEXPECTED_FILE') {
      return res.status(400).json({
        message: 'WRONG FORMAT UPLOAD IMG PLEASE!',
      });
    }
  }
});
route.post('/upload', upload.array('image'), async (req, res) => {
  // console.log(req.files, '😁😁😁😁');
  const file = req.files[0];
  const result = await s3Uploadv2(file);

  res.json({ status: 'success', result });
});
// const multiUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'description', maxCount: 1 }]);
// route.post('/upload', multiUpload, (req, res) => {
//   console.log(req.files, '😁😁😁😁');
//   res.json({ status: 'success' });
// });

module.exports = route;

//* lets get the all the data from the database and display cards
//* add to the database from the input
