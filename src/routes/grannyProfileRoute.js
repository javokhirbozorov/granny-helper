const route = require('express').Router();
const { createWorker } = require('tesseract.js');

const renderTemplate = require('../lib/renderTemplate');
const GrannyProfile = require('../views/GrannyProfile');
const { Family, Granny, Album, GrandChild } = require('../../db/models');
const { checkSession } = require('../middleware/checkSession');

route.get('/', checkSession, async (req, res) => {
  try {
    // const { session } = req;
    // const album = await Album.findAll({
    //   include: [{
    //     model: Granny,
    //     where: { username: session.user },
    //   }],
    // });
    // renderTemplate(GrannyProfile, { album, session }, res);


    const { session } = req;

    const granny = await Granny.findOne({ where: { username: session.user }, raw: true });
    const grannyAlbum = await Album.findAll({ where: { grannyId: granny.id }, raw: true });
    const grandChildId = await Family.findAll({ where: { grannyId: granny.id }, raw: true });

    const myGranndChild = [];

    for (let i = 0; i < grandChildId.length; i++) {
      myGranndChild.push(...await GrandChild.findAll({ where: { id: grandChildId[i].grandChildId }, raw: true }));
    }

    renderTemplate(GrannyProfile, { grannyAlbum, myGranndChild, session }, res);
  } catch (err) {
    console.log(err);
  }
});

const worker = createWorker({
  logger: (m) => console.log(m),
});



route.post('/', async (req, res) => {
  // console.log(req.body);
  try {
    const user = await Granny.findOne({ where: { username: req.session.user } });
    const image = req.body.imglink;
    await worker.load();
    await worker.loadLanguage('rus');
    await worker.initialize('rus');
    const { data: { text } } = await worker.recognize(image);
    console.log(text);
    const newPhoto = await Album.create({ imglink: image, imgText: text, grannyId: user.id });
    await worker.terminate();
    res.redirect('/profile');
  } catch (error) {
    console.log(error);
  }
});


// POST
route.post('/addGrandChild', async (req, res) => {
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


module.exports = route;

//* lets get the all the data from the database and display cards
//* add to the database from the input


// const route = require('express').Router();

// const renderTemplate = require('../lib/renderTemplate');
// const GrandChildProfile = require('../views/GrandChildProfile');

// const {
//   Family, Granny, Album, GrandChild,
// } = require('../../db/models');

// // GET
// route.get('/', async (req, res) => {
//   try {
//     const { session } = req;
//     const grandChild = await GrandChild.findOne({ where: { username: session.user }, raw: true });
//     const grannyId = await Family.findAll({ where: { grandChildId: grandChild.id }, raw: true });

//     const grannyAlbum = [];
//     const myGranny = [];

//     for (let i = 0; i < grannyId.length; i++) {
//       grannyAlbum.push(...await Album.findAll({ where: { grannyId: grannyId[i].grannyId }, raw: true }));
//       myGranny.push(...await Granny.findAll({ where: { id: grannyId[i].grannyId }, raw: true }));
//     }

//     renderTemplate(GrandChildProfile, { grannyAlbum, myGranny, session }, res);
//   } catch (err) {
//     console.log(err);
//   }
// });


// // // POST
// route.post('/', async (req, res) => {
//   const { imgUrlInput } = req.body;
  
//   console.log(imgUrlInput)

//   try {
//     const album = await Album.create({ imglink: imgUrlInput, grannyId: 1 });
//     console.log(album);

//     res.json(album);
//   } catch (err) {
//     console.log(err);
//   }
// });

// // POST
// route.post('/addGranny', async (req, res) => {
//   const { email } = req.body;
//   const { user } = req.session;

//   try {
//     const grannyInsert = await Granny.findOne({ where: { email } });
//     const findIdGrandChild = await GrandChild.findOne({ where: { username: user } });

//     if (grannyInsert) {
//       const addGranny = await Family.create({ grannyId: grannyInsert.id, grandChildId: findIdGrandChild.id });

//       res.json(grannyInsert);
//     } else {
//       res.status(400);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// });

// // DELETE
// route.delete('/deleteGranny', async (req, res) => {
//   const { id } = req.body;

//   console.log(id);

//   try {
//     const album = await Family.destroy({ where: { grannyId: id } });
//     console.log(album);
//     res.json(album);
//   } catch (err) {
//     console.log(err);
//   }
// });

// module.exports = route;