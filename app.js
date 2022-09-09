require('@babel/register');
require('dotenv').config();

const session = require('express-session');
const FileStore = require('session-file-store')(session);

// npm
const express = require('express');
const path = require('path');

// Database
const { sequelize } = require('./db/models')


// express init
const app = express();
const PORT = process.env.PORT || 3000;


// express settings
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());


// создание конфига для куки
const sessionConfig = {
  name: 'grannyhelper',
  store: new FileStore(), // подключение БД для куки
  secret: 'AYUB',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 3600 * 24 * 30, // 30 дней
    httpOnly: true,
  },
};

app.use(session(sessionConfig));


// import routes
const loginRouter = require('./src/routes/loginRoute');
const signUpRoute = require('./src/routes/signUpRoute');
const logoutRoute = require('./src/routes/logoutRoute');
const GrannyTest = require('./src/routes/grannyProfileRouter1');

const MainPage = require('./src/routes/mainPageRoute');
const GrannyMainPage = require('./src/routes/homeGrannyRoute');
const GrannyProfile = require('./src/routes/grannyProfileRoute');
const GrandChildProfileRoute = require('./src/routes/grandChildProfileRoute');


const grandchildRouter = require('./src/routes/grandchildRouter');


// init routes
app.use('/', MainPage);
app.use('/sign-up', signUpRoute);
app.use('/login', loginRouter);
app.use('/logout', logoutRoute);
app.use('/', GrannyTest);

app.use(`/grandChildProfile`, GrandChildProfileRoute);
app.use('/profile', GrannyProfile);

// app.use('/', grandchildRouter);
// app.use('/', GrannyProfile1);


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