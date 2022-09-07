require('@babel/register');
require('dotenv').config();

// npm
const express = require('express');
const path = require('path');
const { sequelize } = require('./db/models');

// express init
const app = express();
const PORT = process.env.PORT || 3000;

// express settings
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());

// import routes
const loginRouter = require('./src/routes/loginRoute');
const signUpRoute = require('./src/routes/signUpRoute');

const MainPage = require('./src/routes/mainPageRoute');
const GrannyMainPage = require('./src/routes/homeGrannyRoute');
const GrannyProfile = require('./src/routes/grannyProfileRoute');

const grandchildRouter = require('./src/routes/grandchildRouter');

// App Main Address
const granny = 'granny.com';

// init routes
app.use('/sign-up', signUpRoute);
app.use('/', MainPage);
app.use(`/${granny}/main`, GrannyMainPage);
app.use(`/${granny}/profile`, GrannyProfile);

app.use('/login', loginRouter);
app.use('/', grandchildRouter);

// app listener

app.listen(PORT, async () => {
  console.log(`Server starting on PORT => ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('Connect sequelize');
  } catch (error) {
    console.error(error);
  }
});
