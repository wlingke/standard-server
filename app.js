'use strict';
var _ = require('lodash');
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();
app.set('port', process.env.PORT || 3000);

// Logging
if (app.get('env') !== 'production') {
    app.use(morgan('dev'));
}

//Renders invalid api error catching
app.get('/*', function (req, res, next) {
    res.send(404, 'Invalid API Address');
});

//Error handler
app.use(function (err, req, res, next) {
    console.log(err);
    console.log(err.stack);
    res.send(500, err);
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port') + ' in ' + app.get('env') + ' mode.');
});