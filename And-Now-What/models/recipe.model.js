// User model here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {type: String, required: true, unique: true },
  level: {type: String, enum: ['low','medium, expert']},
  ingredents: [{type: String}],
  cuisine: {type: String, required: true},
  dishType: {type: String, enum: ['']},
  duration: {type: Number, min: 0},
  creator: {type: String},
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;