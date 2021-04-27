const express = require('express');
const Recipe = require('../models/recipe.model');
const router = express.Router();
const passport = require('passport');

router.get('/create', (req, res, next) => {
  res.render('create-form');
});


router.post('/create', (req, res, next) => {
  const { title, ingredent, cuisines, dishType, readyInMinutes, author, image, summary} = req.body;
  Recipe.create( { title, ingredent, cuisines, dishType, readyInMinutes, author, image, summary} )
  .then(() => {
    res.redirect('/recipes');
  })
  .catch(error => res.render('/create-form', { error }));
});
