const route = require('express').Router();
const fs = require('fs');
const utils = require('util');
const renderTemplate = require('../lib/renderTemplate');
const GrannyProfile = require('../views/GrannyProfile');
const { Granny, Album } = require('../../db/models');
const { checkSession } = require('../middleware/checkSession');

const unlinkFile = utils.promisify(fs.unlink);
const multer = require('multer');

const upload = multer({ dest: '/' });
const { uploadFile, getFileStream } = require('../s3');

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

route.get('/:key', (req, res) => {
  const { key } = req.params;
  const readStream = getFileStream(key);
  readStream.pipe(res);
});

route.post('/', async (req, res) => {
  const { file } = req;
  console.log(file);
  const result = await uploadFile(file);
  await unlinkFile(file.path);

  console.log(result, '😁😁😁😁');
  const { description } = req.body;
  res.send({ imagePath: `/${result.Key}` });
});
module.exports = route;

//* lets get the all the data from the database and display cards
//* add to the database from the input
