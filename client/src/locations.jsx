import Location from './location.jsx';

var Locations = (props) => {
  return (
    <div>
      <div id='locations-header'>
        <h1 id='locations-header-title'>Breweries Nearby</h1>

        <form id='new-search-form' onSubmit={(e) => {props.searchBreweries(e)}}> 
          <label>New Search</label>
          <input id='new-search' type='text' value={props.value} onChange={(e) => props.handleChange(e.target.value)}></input>
        </form>

      </div>

      {props.locations.map((brewery, index) => {
        return <Location details={brewery} key={index} />
      })}

    </div>
  )
};

export default Locations;