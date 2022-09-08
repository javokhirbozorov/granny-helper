const route = require('express').Router();

const renderTemplate = require('../lib/renderTemplate');
const GrandChildProfile = require('../views/GrandChildProfile');

const {
  Family, Granny, Album, GrandChild,
} = require('../../db/models');

// GET
route.get('/', async (req, res) => {
  try {
    const { session } = req;
    const grandChild = await GrandChild.findOne({ where: { username: session.user }, raw: true });
    const grannyId = await Family.findAll({ where: { grandChildId: grandChild.id }, raw: true });

    const grannyAlbum = [];
    const myGranny = [];

    for (let i = 0; i < grannyId.length; i++) {
      grannyAlbum.push(...await Album.findAll({ where: { grannyId: grannyId[i].grannyId }, raw: true }));
      myGranny.push(...await Granny.findAll({ where: { id: grannyId[i].grannyId }, raw: true }));
    }

    renderTemplate(GrandChildProfile, { grannyAlbum, myGranny, session }, res);
  } catch (err) {
    console.log(err);
  }
});

// POST
route.post('/', async (req, res) => {
  const { imgUrlInput } = req.body;

  console.log(imgUrlInput);

  try {
    const album = await Album.create({ imglink: imgUrlInput, grannyId: 1 });
    console.log(album);

    res.json(album);
  } catch (err) {
    console.log(err);
  }
});

// POST
route.post('/addGranny', async (req, res) => {
  const { email } = req.body;
  const { user } = req.session;

  try {
    const grannyInsert = await Granny.findOne({ where: { email } });
    const findIdGrandChild = await GrandChild.findOne({ where: { username: user } });

    if (grannyInsert) {
      const addGranny = await Family.create({ grannyId: grannyInsert.id, grandChildId: findIdGrandChild.id });

      res.json(grannyInsert);
    } else {
      res.status(400);
    }
  } catch (err) {
    console.log(err);
  }
});

// DELETE
route.delete('/deleteGranny', async (req, res) => {
  const { id } = req.body;

  console.log(id);

  try {
    const album = await Family.destroy({ where: { grannyId: id } });
    console.log(album);
    res.json(album);
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
