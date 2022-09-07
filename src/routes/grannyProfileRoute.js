const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const GrannyProfile = require('../views/GrannyProfile');
const { Granny, Album } = require('../../db/models');
const { checkSession } = require('../middleware/checkSession');

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

module.exports = route;

//* lets get the all the data from the database and display cards
//* add to the database from the input
