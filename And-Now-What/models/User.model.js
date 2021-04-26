// User model here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true }, 
  password: { type: String, required: true },
  mail: { type: String},
})

const User = mongoose.model('User', userSchema);

module.exports = User;