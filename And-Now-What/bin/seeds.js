const mongoose = require('mongoose')

const Ingredent = require('../models/ingredent.model')

mongoose.connect('mongodb://localhost/and_now_what')

const ingredents = [
  {
    ingrendent: "banana",
    title: "Xocai Healthy Chocolate Peanut Butter Bannana Dip",
    image: "https://spoonacular.com/recipeImages/665469-312x231.jpg",
    likes: 1,
    },
  {
    ingrendent: "banana",
    title: "Luscious Orange Cardamom Smoothie",
    image: "https://spoonacular.com/recipeImages/650485-312x231.jpg",
    likes: 1,
    },

    {
      ingrendent: "banana",
      title: "Peanut Butter and Jelly Smoothie",
      image: "https://spoonacular.com/recipeImages/655235-312x231.jpg",
      likes: 58,
      },
    {
      ingrendent: "tuna",
      title: "Tuna Stuffed Hard-Boiled Eggs",
      image: "https://spoonacular.com/recipeImages/663950-312x231.jpg",
      likes: 4
    },
    {
      ingrendent: "tuna",
      title: "Baharat Panko Crusted Albacore Tuna",
      image: "https://spoonacular.com/recipeImages/633386-312x231.jpg",
      likes: 3
    },
    {
      ingrendent: "meat",
      title: "Instant Pot Hawaiian Chicken",
      image: "https://spoonacular.com/recipeImages/982365-312x231.jpg",
      likes: 19
    },
    {
      ingrendent: "meat",
      title: "Bacon Ice Cream",
      image: "https://spoonacular.com/recipeImages/633314-312x231.jpg",
      likes: 9
    },
    {
      ingrendent: "onion",
      title: "Caramelized Onion Dip",
      image: "https://spoonacular.com/recipeImages/716422-312x231.jpg",
      likes: 95
    },
    {
      ingrendent: "onion",
      title: "Glazed Pearl Onions",
      image: "https://spoonacular.com/recipeImages/644758-312x231.jpg",
      likes: 1
    },
]

Ingredent
    .create(ingredents)
    .then(data => {
        console.log(data)
        mongoose.connection.close()
    })
    .catch(err => console.error(err))