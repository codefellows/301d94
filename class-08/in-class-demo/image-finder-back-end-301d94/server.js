'use strict';

// REQUIRE
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { request } = require('express');

// USE
const app = express();
app.use(cors());

// define port and get proof of live that .env works
const PORT = process.env.PORT || 3002;

// ROUTES
app.get('/', (req, res) => {
  res.status(200).send('Hello there!');
});

app.get('/photos', async (req, res, next) => {
  try {
  let searchQuery = req.query.searchQuery;
  let url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=${searchQuery}`;
  let results = await axios.get(url);
  let picArray = results.data.results.map(imag => new Image(imag));
  res.send(picArray);
  } catch(err) {
    next(err)
  }
});

app.get('*', (req, res) => {
  res.status(404).send('These aren\'t the droids you\'re looking for.' )
});

// CLASSES

class Image {
  constructor(pic) {
    this.src = pic.urls.regular;
    this.alt = pic.alt_description;
    this.artist = pic.user.name;
  }
}

// ERRORS
app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send(err.message);
});

// LISTEN
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
