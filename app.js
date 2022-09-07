require('@babel/register');
require('dotenv').config();

const session = require('express-session');
const FileStore = require('session-file-store')(session);

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
// ручка для выхода пользователя с уничтожением куки и файла сессии
app.use('/logout', logoutRoute);

app.use('/grandchild', grandchildRouter);

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
