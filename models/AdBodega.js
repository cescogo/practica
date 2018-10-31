// AdUnit.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let AdBodega = new Schema({
  bodega_name: {
    type: String
  },
  encargado:{
    type:String
  }
},{
    collection: 'bodega'
});

module.exports = mongoose.model('AdBodega', AdBodega);