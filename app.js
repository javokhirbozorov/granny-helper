require('@babel/register');

// npm
const express = require('express');
const path = require('path');


// express init
const app = express();
const PORT = process.env.PORT || 3000;


const signUpRoute = require('./src/routes/signUpRoute');

app.use('/sign-up', signUpRoute);

// express settings
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());


// import routes
const MainPage = require('./src/routes/mainPageRoute');
const GrannyMainPage = require('./src/routes/homeGrannyRoute');
const GrannyProfile = require('./src/routes/grannyProfileRoute');


// App Main Address
const granny = 'granny.com';


// init routes
app.use('/', MainPage);
app.use(`/${granny}/main`, GrannyMainPage);
app.use(`/${granny}/profile`, GrannyProfile);



// app listener
app.listen(PORT, () => {
  console.log(`Server has started on port: ${PORT}\n`);
});