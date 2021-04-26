
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: {type: String, required: true, unique: true },
  ingredent: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" }],
  cuisines: [{type: String}],
  dishType: [{type: String}],
  readyInMinutes: {type: Number, min: 0},
  author: {type: String},
  image: {type: String},
  summary: {type: String},
})

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;