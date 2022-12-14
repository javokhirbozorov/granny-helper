const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const GrandchildMain = require('../views/GrandchildMain');
const { Album } = require('../../db/models');
const { checkSession } = require('../middleware/checkSession');

route.get('/', checkSession, async (req, res) => {
  try {
    const img = await Album.findAll({ raw: true });
    renderTemplate(GrandchildMain, { img }, res);
  } catch (error) {
    console.log('ошибка отрисовки grandchildeMain', error);
  }
});

module.exports = route;
