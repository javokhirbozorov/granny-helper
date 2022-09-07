const route = require('express').Router();
const ReactDOMServer = require('react-dom/server');
const React = require('react');
const bcrypt = require('bcrypt');

const SignUp = require('../views/SignUp');
const GrannyMain = require('../views/GrannyMain');
const { Granny, GrandChild } = require('../../db/models');

route.get('/', async (req, res) => {
  try {
    const signUpComponent = React.createElement(SignUp, null);
    const html = ReactDOMServer.renderToStaticMarkup(signUpComponent);
    res.write('<!DOCTYPE html/>');
    res.end(html);
  } catch (err) {
    console.log(err);
  }
});

route.post('/', async (req, res) => {
  const {
    nameInput, emailInput, passwordInput, status,
  } = req.body;
  console.log(req.body);
  const password = await bcrypt.hash(passwordInput, 15);
  if (status === 'Grandparent') {
    const findGranny = await Granny.findOne({ where: { email: emailInput } });
    if (!findGranny) {
      const newGranny = await Granny.create({ username: nameInput, email: emailInput, password });
      req.session.user = newGranny.username;
      req.session.save(() => {
        res.redirect('/');
      });
    } else {
      res.redirect('/login');
    };
  } else {
    const findGrChild = await GrandChild.findOne({ where: { email: emailInput } });
    if (!findGrChild) {
      const newGrChild = await GrandChild.create({ username: nameInput, email: emailInput, password });
      req.session.user = newGrChild.username;
      req.session.save(() => {
        res.redirect('/');
      });
    } else {
      res.redirect('/login');
    }
  }
});

module.exports = route;
