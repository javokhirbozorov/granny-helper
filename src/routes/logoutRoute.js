require('@babel/register');
const session = require('express-session');
const bcrypt = require('bcrypt');
const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    if (req.session.user) {
      req.session.destroy(() => {
        res.clearCookie('grannyhelper');
        res.redirect('/');
      });
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    console.log('ERROR', error);
  }
});

module.exports = router;
