require("dotenv").config();
const express = require('express');
const { replaceOne } = require('../models/User.model');
const Recipe = require('../models/recipe.model');
const router  = express.Router();
const axios = require("axios");

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

router.get('/private/recipes/search', (req, res) => {
  res.render('search')
})

router.post("/search", (req, res, next) => {
  let {ingredient} = req.body
  axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.API_KEY}&ingredients=${ingredient}&number=10`)
  .then( response => {
    const data = response.data;

    res.render('view-search', { data })
  })
  .catch( error => console.error(error) )
})

router.get('/private/recipes/:id/', (req, res) => {
  res.render('view-search')
})

router.post("/search", (req, res, next) => {
  let { id } = req.body
  axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.API_KEY}`)
  .then( response => {
    const data = responde.data
    res.render('single-recipe', { data })
  })
  .catch( error =>  {
    console.log(error)
  })
})

module.exports = router;