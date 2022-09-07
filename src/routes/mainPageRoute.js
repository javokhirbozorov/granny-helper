const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const HomePage = require('../views/HomePage');

route.get('/', (req, res) => {
  renderTemplate(HomePage, null, res);
});

module.exports = route;
