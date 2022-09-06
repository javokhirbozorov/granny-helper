require('@babel/register');

const React = require('react');
const ReactDOMServer = require('react-dom/server');


const renderTemplate = (reactEl, props, res) => {
  const el = React.createElement(reactEl, props);

  const html = ReactDOMServer.renderToStaticMarkup(el);

  res.write('<!DOCTYPE html>');
  res.write(html);
  res.end();
}


module.exports = renderTemplate;