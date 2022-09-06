const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const GrannyProfile = require('../views/GrannyProfile');


route.get('/', (req, res) => {
  renderTemplate(GrannyProfile, null, res);
})


module.exports = route;