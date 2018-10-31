const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./config/DB');

    const app = express();

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );
    const adUnitRoutes = require('./routes/adunit.route');

    app.use(bodyParser.json());
    app.use(cors());
    const port = process.env.PORT || 4000;
   //rutas usuarios

    app.use('/adunits', adUnitRoutes);
// aqui se agregan las rutas del server 
//rutas bodega
    const adBodegaRoutes= require('./routes/adBodega.routes');
    app.use('/adbodegas', adBodegaRoutes);
//rutas articulos
    const adArticulosRoutes= require('./routes/adArticulos.routes');
    app.use('/adarticulos', adArticulosRoutes);

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });
    //cesar