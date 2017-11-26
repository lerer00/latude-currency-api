const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Use the body parser for payload.
app.use(bodyParser.urlencoded({ extended: true }));

// Adding all routes.
require('./app/routes')(app, {});

// Listening all incoming calls.
const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log('We are live on ' + port);
});