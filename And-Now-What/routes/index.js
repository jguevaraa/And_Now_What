const express = require('express');
const { replaceOne } = require('../models/User.model');
const Recipe = require('../models/recipe.model');
const router  = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', {user: req.user});
});

router.get('/recipes', (req, res, next) => {
  Recipe.find({})
  .then( recipes => {
    res.render('recipes-list', { recipes });
  })
  .catch( error => {
    console.error(error);
    next(error); 
  });
});

module.exports = router;
