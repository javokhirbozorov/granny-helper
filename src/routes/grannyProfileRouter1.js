const { createWorker } = require('tesseract.js');
const route = require('express').Router();
const { Album } = require('../../db/models');
const renderTemplate = require('../lib/renderTemplate');
const GrannyProfile1 = require('../views/GrannyProfile1');

const worker = createWorker();
console.log(worker);

route.get('/GrannyTest', async (req, res) => {
  try {
    const img = await Album.findAll();
    renderTemplate(GrannyProfile1, { img }, res);
  } catch (error) {
    console.log('Ошибка отрисовки GrannyProfile1 ===>', error);
  }
});

route.post('/GrannyTest', async (req, res) => {
  // (async () => {
  //   await worker.load();
  //   await worker.loadLanguage('eng+chi_tra');
  //   await worker.initialize('eng+chi_tra');
  //   const {
  //     data: { text },
  //   } = await worker.recognize(
  //     'https://tesseract.projectnaptha.com/img/eng_bw.png'
  //   );
  //   console.log(text);
  //   await worker.terminate();
  // })();
  try {
    const img = await Album.findAll({ raw: true });
    console.log(img);
    await worker.load();
    await worker.loadLanguage('eng+chi_tra');
    await worker.initialize('eng+chi_tra');
    const {
      data: { text },
    } = await worker.recognize(img.imglink);
    console.log(text);
    await worker.terminate();
    res.sendStatus(200);
  } catch (error) {
    console.log('Ошибка Бабки ===>', error);
  }
});

module.exports = route;
