require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const renderTemplate = require('./src/lib/renderTemplate');
const GrannyMainPageRouter = require('./src/routes/grannyMainPageRouter');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('<h1>HOME</h1>');
});

app.use('/', GrannyMainPageRouter);

app.listen(PORT, () => {
  console.log('server has started on port:', PORT);
});
