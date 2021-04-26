const express = require('express');
const { replaceOne } = require('../models/User.model');
const router  = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', {user: req.user});
});

module.exports = router;
