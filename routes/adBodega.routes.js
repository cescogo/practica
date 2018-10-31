

const express = require('express');
const app = express();
const adBodegaRoutes = express.Router();

// Require AdUnit model in our routes module
let AdBodega = require('../models/AdBodega');

// Defined store route
adBodegaRoutes.route('/addB').post(function (req, res) {
  let adBodega = new AdBodega(req.body);
  adBodega.save()
    .then(game => {
    res.status(200).json({'adBodega': 'AdBodega in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
adBodegaRoutes.route('/').get(function (req, res) {
    AdBodega.find(function (err, adBodegas){
    if(err){
      console.log(err);
    }
    else {
      res.json(adBodegas);
    }
  });
});

// Defined edit route
adBodegaRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  AdBodega.findById(id, function (err, adBodegas){
      res.json(adBodegas);
  });
});

//  Defined update route
adBodegaRoutes.route('/update/:id').post(function (req, res) {
    AdBodega.findById(req.params.id, function(err, adBodegas) {
    if (!adBodegas)
      return next(new Error('Could not load Document'));
    else {
      adBodegas.encargado = req.body.encargado;
     

      adBodegas.save().then(adBodegas => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
adBodegaRoutes.route('/delete/:id').get(function (req, res) {
    AdBodega.findByIdAndRemove({_id: req.params.id}, function(err, adBodegas){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = adBodegaRoutes;