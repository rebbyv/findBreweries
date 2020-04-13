const express = require('express');
const port = process.env.PORT || 3000;
var apiCall = require('./apiRequest.js');
const app = express();

app.use(express.static('client/dist'));

app.get('/breweries', (req, res) => {
  apiCall('78620')
  .then((data) => res.status(200).send(data))
  .catch((error) => res.status(404).send(error))

})

app.listen(port, (error) => {
  error ? console.log("Error in establishing server"): console.log(`Server listening on ${port}`)
})

