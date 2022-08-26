const axios = require('axios');

let cache = {};

async function getPhotos(req, res, next) {
  try {
    let searchQuery = req.query.searchQuery;

    // create custom key to use when I cache data, and look for cached data
    let key = searchQuery + 'Data';

    let timeToCache = 1000 * 60 * 60 * 24 * 30;
    // let cacheTest = 1000 * 20;
    if (cache[key] && Date.now() - cache[key].timestamp < timeToCache) {
      // if the data is already in the cache and it is recent enough send the cached data in the response
      console.log('It\'s in the cache!');
      res.status(200).send(cache[key].data);

    } else {
      // if the data isn't in already in the cache, make the API request and then cache the data for the future
      console.log('It\'s not in the cache, so let\'s cache it!');

      let url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=${searchQuery}`;
      let results = await axios.get(url);
      let picArray = results.data.results.map(imag => new Image(imag));

      // Cache it! save the data for the future
      cache[key] = {
        data: picArray,
        timestamp: Date.now(),
      };

      res.status(200).send(picArray);
    }
  } catch(err) {
    // next(err)
    Promise.resolve()
      .then(() => {
        throw new Error(err.message);
      }).catch(next);
  }
}

// CLASSES

class Image {
  constructor(pic) {
    this.src = pic.urls.regular;
    this.alt = pic.alt_description;
    this.artist = pic.user.name;
  }
}




function getPhotosWithChaining(req, res) {
    let searchQuery = req.query.searchQuery;

    let params = {
      client_id: process.env.UNSPLASH_API_KEY,
      query: searchQuery
    }

    let url = 'https://api.unsplash.com/search/photos';

    axios.get(url, { params })
      .then(results => results.data.results.map(imag => new Image(imag)))
      .then(picArray => res.status(200).send(picArray))
      .catch(err => console.error(err));
}

module.exports = getPhotos;
