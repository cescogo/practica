const express = require('express');
const app = express();
const adArticulosRoutes = express.Router();

// Require AdUnit model in our routes module
let AdArticulo = require('../models/AdArticulos');

// Defined store route
adArticulosRoutes.route('/addA').post(function (req, res) {
  let adArticulo = new AdArticulo(req.body);
  adArticulo.save()
    .then(game => {
    res.status(200).json({'adArticulo': 'AdArticulo in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
adArticulosRoutes.route('/').get(function (req, res) {
    AdArticulo.find(function (err, adArticulos){
    if(err){
      console.log(err);
    }
    else {
      res.json(adArticulos);
    }
  });
});

// Defined edit route
adArticulosRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  AdArticulo.findById(id, function (err, adArticulos){
      res.json(adArticulos);
  });
});

//  Defined update route
adArticulosRoutes.route('/update/:id').post(function (req, res) {
  AdArticulo.findById(req.params.id, function(err, adArticulos) {
    if (!adArticulos)
      return next(new Error('Could not load Document'));
    else {
      adArticulos.codigo = req.body.codigo;
      adArticulos.articulo_name = req.body.articulo_name;
      adArticulos.descripcion=req.body.descripcion
      adArticulos.precio=req.body.precio;
      adArticulos.bodega=req.body.bodega;

      adArticulos.save().then(adArticulos => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});


// Defined delete | remove | destroy route
adArticulosRoutes.route('/delete/:id').get(function (req, res) {
  AdArticulo.findByIdAndRemove({_id: req.params.id}, function(err, adArticulos){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = adArticulosRoutes;