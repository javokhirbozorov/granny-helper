const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const GrannyMainPage = require('../views/GrannyMain');

route.get('/', (req, res) => {
  renderTemplate(GrannyMainPage, null, res);
});

module.exports = route;
