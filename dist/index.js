'use strict';

// Härifrån startar vi upp vår webshop
var mongoose = require('mongoose');

var _require = require('./src/server'),
    app = _require.app,
    port = _require.port;

var dbConfig = require('./config/config');

// Kicka igång servern
var dbOptions = { useUnifiedTopology: true, useNewUrlParser: true };
mongoose.connect(dbConfig.databaseURL, dbOptions).then(function () {
    app.listen(port, function () {
        return console.log('App listening on port ' + port + '!');
    });
});

module.exports = { app: app, port: port };