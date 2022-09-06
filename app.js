require('@babel/register');

const ReactDOMServer = require('react-dom/server');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const signUpRoute = require('./src/routes/signUpRoute');

app.use('/sign-up', signUpRoute);

app.get('/', (req, res) => {
  res.send('<h1>HOME</h1>');
});

app.listen(PORT, () => {
  console.log('server has started on port:', PORT);
});
