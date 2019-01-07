const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  category: String,
  brandId: String
});

module.exports = mongoose.model('Product', productSchema);