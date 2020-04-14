import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');
import Locations from './locations.jsx';
import Location from './location.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      locations: null
    }
  }

  handleZipChange(e) {
    this.setState({zip: e.target.value})
  } 

  getBreweries(e) {
    e.preventDefault();

    axios.get(`http://localhost:3000/breweries/${this.state.zip}`)
    .then((response) => {
      this.setState({
        zip: '',
        locations: response.data
      })
    })
    .catch((error) => {
      console.log(error)
    })
    
  }

  render() {

    var searchDiv = (
      <div id='main'>
        <h1>Micro-Brewery Finder</h1>
        <form onSubmit={(e) => {this.getBreweries(e)}}> 
          <label>Enter your zip code to find nearby breweries</label>
          <input type='text' value={this.state.zip} onChange={(e) => this.handleZipChange(e)}></input>
        </form>
      </div>
    )

    return (
      <div>
        {this.state.locations ? <Locations locations={this.state.locations}/>: searchDiv}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))