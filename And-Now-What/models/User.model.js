// User model here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true }, 
  password: { type: String, required: true },
  mail: { type: string, required:true, unique: true},
})

const User = mongoose.model('User', userSchema);

module.exports = User;