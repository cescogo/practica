// AdUnit.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let AdUnit = new Schema({
  user_name: {
    type: String
  },
  password: {
    type: String
  },
  permition:{
    type:String
  },
  bodega:{
    type:String
  }
},{
    collection: 'users'
});

module.exports = mongoose.model('AdUnit', AdUnit);