import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios')

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      locations: []
    }
  }

  handleZipChange(e) {
    this.setState({zip: e.target.value})
  } 

  getBreweries(e) {
    e.preventDefault();

    axios.get(`http://localhost:3000/breweries/${this.state.zip}`)
    .then((response) => {
      console.log(response.data)
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
    return (
      <div>
        <h1>Micro-Brewery Finder</h1>
        <form onSubmit={(e) => {this.getBreweries(e)}}> 
          <label>Enter your zip code to find nearby breweries</label>
          <input type='text' value={this.state.zip} onChange={(e) => this.handleZipChange(e)}></input>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))