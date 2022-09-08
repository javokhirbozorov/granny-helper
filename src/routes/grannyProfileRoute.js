const route = require('express').Router();
const { createWorker } = require('tesseract.js');

const renderTemplate = require('../lib/renderTemplate');
const GrannyProfile = require('../views/GrannyProfile');
const { Granny, Album } = require('../../db/models');
const { checkSession } = require('../middleware/checkSession');

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

const worker = createWorker({
  logger: (m) => console.log(m),
});

route.post('/', async (req, res) => {
  // console.log(req.body);
  try {
    const user = await Granny.findOne({ where: { username: req.session.user } });
    const image = req.body.imglink;
    await worker.load();
    await worker.loadLanguage('rus');
    await worker.initialize('rus');
    const { data: { text } } = await worker.recognize(image);
    console.log(text);
    const newPhoto = await Album.create({ imglink: image, imgText: text, grannyId: user.id });
    await worker.terminate();
    res.redirect('/profile');
  } catch (error) {
    console.log(error);
  }
});

module.exports = route;

//* lets get the all the data from the database and display cards
//* add to the database from the input
