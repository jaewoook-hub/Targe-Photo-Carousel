const mongoose = require('mongoose');
const db = require('./index.js')

let imageSchema = new mongoose.Schema({
  product: String,
  imageName: String,
  color: String,
  url: String,
  alt: String
})

const Image = mongoose.model('images', imageSchema)
module.exports = Image;
