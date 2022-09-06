require('@babel/register');

const ReactDOMServer = require('react-dom/server');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

const loginRouter = require('./src/routes/loginRoute');

app.get('/', (req, res) => {
  res.send('<h1>HOME</h1>');
});

app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log('server has started on port:', PORT);
});
