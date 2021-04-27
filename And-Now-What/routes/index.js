require("dotenv").config();
const express = require('express');
const { replaceOne } = require('../models/User.model');
const Recipe = require('../models/recipe.model');
const router  = express.Router();
const axios = require("axios");

// const SpoonacularApi = require('spoonacular_api');
// let defaultClient = SpoonacularApi.ApiClient.instance;
// // Configure API key authorization: apiKeyScheme
// let apiKeyScheme = defaultClient.authentications['apiKeyScheme'];
// apiKeyScheme.apiKey = "fca5115684f049309c7a9cf8dd175018";
// // Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
// //apiKeyScheme.apiKeyPrefix = 'Token';
// let apiInstance = new SpoonacularApi.DefaultApi();

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



router.get('/search', (req, res) => {


// let ingredients = "apples,flour,sugar"; // String | A comma-separated list of ingredients that the recipes should contain.
// let opts = {
//   '_number': 10, // Number | The maximum number of recipes to return (between 1 and 100). Defaults to 10.
//   'limitLicense': true, // Boolean | Whether the recipes should have an open license that allows display with proper attribution.
//   'ranking': 1, // Number | Whether to maximize used ingredients (1) or minimize missing ingredients (2) first.
//   'ignorePantry': true // Boolean | Whether to ignore typical pantry items, such as water, salt, flour, etc.
// };

// apiInstance.searchRecipesByIngredients(ingredients, opts, (error, data, response) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log('API called successfully. Returned data: ' + data);
//   }
// });

  


  res.render('search')
})

router.post("/search", (req, res, next) => {
  let {ingredient} = req.body
console.log("ingredient", ingredient)
  axios.get(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.API_KEY}&ingredients=${ingredient}&number=4`)
  .then( response => {
    console.log(response.data)
  })
  .catch( error =>  {
    console.log(error)
    })

})




module.exports = router;
