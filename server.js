const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();

// Running on port 8000.
const port = 8000;

// Use the body parser for payload.
app.use(bodyParser.urlencoded({ extended: true }));

// Adding all routes.
require('./app/routes')(app, {});

// Listening all incoming calls.
app.listen(port, () => {
    console.log('We are live on ' + port);
});