const express = require('express');
const { isLoggedIn } = require('../middlewares');
const User = require('../models/User.model');
const Recipe = require('../models/recipe.model');
const router = express.Router();
const passport = require('passport');

router.get('/profile', isLoggedIn, (req, res, next) => {
  res.render('profile', { user: req.user });
})

router.post('/profile', (req, res, next) => {
  res.render('profile', { user: req.user });
})


router.get('/recipe/create', (req, res, next) => {
  res.render('create-form');
});

// router.get('/recipe/create', passport.authenticate("local", {
//   successRedirect: "/recipe/create",
//   failureRedirect: "/auth/login",
//   passReqToCallback: true
// }));

router.post('/recipe/create', (req, res, next) => {
  const { title, ingredent, cuisines, dishType, readyInMinutes, author, image, summary} = req.body;
  Recipe.create( { title, ingredent, cuisines, dishType, readyInMinutes, author, image, summary} )
  .then(() => {
    res.redirect('/recipes');
  })
  .catch(error => res.render('/create-form', { error }));
});


router.get('/recipes/:id/edit', (req, res, next) => {
  const { id } = req.params;
  Recipe.findById(id)
//   .then( () => {
//     res.render('update-form');
//   })
//   .catch( error => next(error));  
// });

.then( recipes => res.render('update-form', recipes))
.catch( error => next(error));  
});

router.post('/recipes/:id/edit', (req, res, next) => {
  const { id } = req.params;
  const { title, ingredent, cuisines, dishType, readyInMinutes, author, image, summary} = req.body;
  Recipe.findByIdAndUpdate(id, { title, ingredent, cuisines, dishType, readyInMinutes, author, image, summary })
  .then(() => res.redirect('/recipes'))
  .catch(error => res.render('update-form', { error }));
});

module.exports = router;