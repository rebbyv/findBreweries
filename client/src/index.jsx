import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  getBreweries() {

  }

  render() {
    return (
      <div>
        <h1>Micro-Brewery Finder</h1>
        <form> 
          <label>Enter your zip code to find nearby breweries</label>
          <input type='text'></input>
        </form>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))