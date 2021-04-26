const express = require('express');
const uploader = require('../configs/cloudinary.config');
const { isLoggedIn, checkRole } = require('../middlewares');
const User = require('../models/User.model');
const router = express.Router();

router.get('/profile', isLoggedIn, (req, res, next) => {
  res.render('profile', { user: req.user });
})

router.post('/profile', (req, res, next) => {
  res.render('profile', { user: req.user });
})

module.exports = router;