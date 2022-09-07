require('@babel/register');
const session = require('express-session');
const bcrypt = require('bcrypt');
const React = require('react');
const router = require('express').Router();
const ReactDOMServer = require('react-dom/server');
const { Granny, Album, GrandChild } = require('../../db/models');

const LogIn = require('../views/LogIn');

router.get('/', async (req, res) => {
  const loginpage = React.createElement(LogIn, null);
  const html = ReactDOMServer.renderToStaticMarkup(loginpage);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  const granny = await Granny.findOne({ where: { email } });
  if (!granny) {
    const grandchild = await GrandChild.findOne({ where: { email } });
    if (!grandchild) {
      res.send('WRONG EMAIL');
    } else {
      // const grandchildPassCheck = await bcrypt.compare(password, grandchild.email);
      if (password === grandchild.password) {
        req.session.grandchild = grandchild.username;
        req.session.save(() => {
          res.send(grandchild.username);
        });
      } else {
        res.redirect('/login');
      }
    }
  } else {
    // const grannyPassCheck = await bcrypt.compare(password, granny.email);
    if (password === granny.password) {
      req.session.granny = granny.username;
      req.session.save(() => {
        res.redirect('/grannymain');
      });
    } else {
      res.redirect('/login');
    }
  }
});

module.exports = router;
