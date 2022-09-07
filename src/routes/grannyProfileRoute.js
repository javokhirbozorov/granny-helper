const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const GrannyProfile = require('../views/GrannyProfile');
const { Granny, Album } = require('../../db/models');

route.get('/', async (req, res) => {
  try {
    const album = await Album.findAll();
    console.log(album);
    const { session } = req;
    renderTemplate(GrannyProfile, { album, session }, res);
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;

//* lets get the all the data from the database and display cards
//* add to the database from the input
