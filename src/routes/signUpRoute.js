const route = require('express').Router();
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const SignUp = require('../views/SignUp');

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

module.exports = route;
