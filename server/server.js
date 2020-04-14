const express = require('express');
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
var apiCall = require('./apiRequest.js');

const app = express();

app.use(express.static('client/dist'));

app.get('/breweries/:zip', (req, res) => {
  apiCall(req.params.zip)
  .then((data) => res.status(200).send(data))
  .catch((error) => res.status(404).send(error))

})

app.listen(port, (error) => {
  error ? console.log("Error in establishing server"): console.log(`Server listening on ${port}`)
})

