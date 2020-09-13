const { useState } = React;
import Locations from './locations.jsx';

//// using hooks ////
var App = (props) => {
  const [zip, setZip] = useState('');
  const [locations, setLocations] = useState(null);

  const getBreweries = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:8000/breweries/${zip}`)
      .then((response) => {
        setZip('');
        setLocations(response.data)
      })
      .catch((error) => console.log(error))
  }

  const changeZip = (newZip) => setZip(newZip);

  var searchDiv = (
    <div id='main'>
      <h1>Micro-Brewery Finder</h1>
      <form onSubmit={(e) => { getBreweries(e) }}> 
        <label>Enter your zip code to find nearby breweries</label>
        <input type='text' value={zip} onChange={(e) => setZip(e.target.value)}></input>
      </form>
    </div>
  )

  return (
    <div>
      {locations ? 
        <Locations 
          locations={locations} 
          value={zip} 
          handleChange={changeZip} 
          searchBreweries={getBreweries}/>
        : searchDiv}
    </div>
  )
}


// without hooks
/*
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
    const baseUrl = 'http://localhost:3000';
    axios.get(`/breweries/${this.state.zip}`)
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
        {this.state.locations ? 
          <Locations 
            locations={this.state.locations} 
            value={this.state.zip} 
            handleChange={this.handleZipChange.bind(this)} 
            searchBreweries={this.getBreweries.bind(this)}/>
          : searchDiv}
      </div>
    )
  }
}
*/

ReactDOM.render(<App />, document.getElementById('app'))