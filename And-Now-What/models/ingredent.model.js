
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredentSchema = new Schema({
  ingredient: {type: String, required: true },
  title: {type: String, required: true, unique: true },
  image: {type: String},
  likes: {type: Number},
  
})

const Ingredient = mongoose.model('Ingredient', ingredentSchema);

module.exports = Ingredient;