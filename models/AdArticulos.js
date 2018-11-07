// AdUnit.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for AdUnits
let AdArticulo = new Schema({
    codigo: {
        type: String
      },
  articulo_name: {
    type: String
  },
  descripcion: {
    type: String
  },
  precio: {
    type: Number
  },
  bodega:{
    type:String
  },
  cantidad:{
    type:String
  }
},{
    collection: 'articulos'
});

module.exports = mongoose.model('AdArticulo', AdArticulo);