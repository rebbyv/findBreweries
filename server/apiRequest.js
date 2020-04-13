const key = require('../config.js');
const request = require('request');

module.exports = (query) => {
  const options = {
    url: 'https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/search',
    headers: {
      "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
      "x-rapidapi-key": key
    },
    qs: {
      query: query
    }
  }

  return new Promise((resolve, reject) => {
    request(options, (error, res, body) => {
      if (error) {
        reject(error);
      } else {
        resolve(body);
      }
    })
  })

}

// var cb = (err, res, body) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(body)
//   }
// }

// request(options, cb)