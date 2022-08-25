const axios = require('axios');

async function getPhotos(req, res, next) {
  try {
    let searchQuery = req.query.searchQuery;
    let url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=${searchQuery}`;
    let results = await axios.get(url);
    let picArray = results.data.results.map(imag => new Image(imag));
    res.send(picArray);
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

module.exports = getPhotosWithChaining;
