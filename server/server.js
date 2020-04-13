const express = require('express');
const port = process.env.PORT || 3000;
const apiRequest = require('./apiRequest.js');
const app = express();


console.log(apiRequest)
app.use(express.static('client/public'));

app.get('/breweries/:location', (req, res) => {
  

})

app.listen(port, (error) => {
  error ? console.log("Error in establishing server"): console.log(`Server listening on ${port}`)
})

