/* jshint esversion: 6 */
const express      = require('express');
const morgan       = require('morgan');
const bodyParser   = require('body-parser');
const mongoose     = require('mongoose');

var app      = express();
var port     = process.env.PORT || 8080;
var router   = require('./routes');
var config   = require('./config');

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Logger
morgan.token('id', function getId (req) { return req.id; });
app.use(morgan('common'));

//DB
mongoose.connect(config.dbName);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() { console.log('Connected to database'); });

//Routes
app.use(router);

//Serve
app.listen(port);
console.log(`Stuff happening on port ${port}`);
