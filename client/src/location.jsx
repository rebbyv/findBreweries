import React from 'react';

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    var brewery = this.props.details;

    var directions = 'http://www.google.com/maps/search/?api=1&query=' + 
      brewery.name.split(' ').join('+') + '%2C+' + brewery.city.split(' ').join('+') + '%2C+' + brewery.state 

    return (
      <div id='location-info'>
        <h2>{brewery.name}</h2>
        <p>{brewery.street} | {brewery.city}, {brewery.state} {brewery.postal_code.substring(0,5)}</p>
        <p>{brewery.phone.substring(0,3)}.{brewery.phone.substring(3,6)}.{brewery.phone.substring(6)}</p>
        <span id="links">
          <p><a href={brewery.website_url} target='_blank'>Visit the website</a></p>
          <p><a href={directions} target='_blank'>Get Directions</a></p>
        </span>
      </div>

    )
  }
}

export default Location;