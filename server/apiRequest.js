const key = require('../config.js');
const request = require('request');

module.exports = (query) => {
  const options = {
    url: 'https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/search',
    headers: {
      "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
      "x-rapidapi-key": key //process.env.rapidApiKey
    },
    qs: {
      query: query
    }
  };

  return new Promise((resolve, reject) => {
    request(options, (error, res, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    })
  })
};
