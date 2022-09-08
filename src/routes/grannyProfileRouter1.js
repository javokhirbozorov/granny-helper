const { createWorker } = require('tesseract.js');
const router = require('express').Router();
const { Album, Granny } = require('../../db/models');
const renderTemplate = require('../lib/renderTemplate');
const GrannyProfile1 = require('../views/GrannyProfile1');


router.get('/GrannyTest', async (req, res) => {
  try {
    // const img = await Album.findAll();
    renderTemplate(GrannyProfile1, null, res);
  } catch (error) {
    console.log('Ошибка отрисовки GrannyProfile1 ===>', error);
  }
});
const worker = createWorker({
  logger: (m) => console.log(m),
});

router.post('/GrannyTest', async (req, res) => {
  const user = await Granny.findOne({ where: { username: req.session.user } });
  const image = req.body.imglink;
  await worker.load();
  await worker.loadLanguage('rus');
  await worker.initialize('rus');
  const { data: { text } } = await worker.recognize(image);
  console.log(text);
  const newPhoto = await Album.create({ imglink: image, imgText: text, grannyId: user.id });
  await worker.terminate();
  res.redirect('/GrannyTest');
});

module.exports = router;
