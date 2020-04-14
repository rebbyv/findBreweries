import React from 'react';
import Location from './location.jsx';

var Locations = (props) => {

    return (
      <div>
        <h1 id='locations-header'>Breweries Nearby</h1>
        {props.locations.map((brewery, index) => {
          return <Location details={brewery} key={index} />
        })}
      </div>
    )
};

export default Locations;