require('@babel/register');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const renderTemplate = (reactElement, props, res) => {
  // В самом начале делаем @babel/register, recuire React, require ReactDOMServer
  // Создаем ReactElement на основе реакт-компонента
  const reactEl = React.createElement(reactElement, props);
  // Рендерим элемент и получаем html (в виде строки)
  const html = ReactDOMServer.renderToStaticMarkup(reactEl);
  // Прописываем DOCTYPE
  res.write('<!DOCTYPE html>');
  res.write(html);
  res.end();
};

module.exports = renderTemplate;
