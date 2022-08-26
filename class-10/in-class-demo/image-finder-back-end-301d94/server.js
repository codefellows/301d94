'use strict';

// REQUIRE
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const photoHandler = require('./photos.js');

// USE
const app = express();
app.use(cors());

// define port and get proof of live that .env works
const PORT = process.env.PORT || 3002;

// ROUTES
app.get('/', (req, res) => {
  res.status(200).send('Hello there!');
});

app.get('/photos', photoHandler);

app.get('*', (req, res) => {
  res.status(404).send('These aren\'t the droids you\'re looking for.' )
});

// ERRORS
app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send(err.message);
});

// LISTEN
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
