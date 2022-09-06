require('@babel/register');
const React = require('react');
const router = require('express').Router();
const ReactDOMServer = require('react-dom/server');

const LogIn = require('../views/LogIn');

router.get('/', (req, res) => {
  const loginpage = React.createElement(LogIn, null);
  const html = ReactDOMServer.renderToStaticMarkup(loginpage);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

module.exports = router;
