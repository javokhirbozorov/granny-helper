const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const GrannyMainPage = require('../views/GrannyMainPage');

const router = express.Router();

router.get('/grannyMainPage', async (req, res) => {
  try {
    renderTemplate(GrannyMainPage, null, res);
  } catch (error) {
    console.log('Ошибка отрисовки GrannyMainPage ====> ', error);
  }
});

module.exports = router;
