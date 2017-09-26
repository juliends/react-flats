import React, { Component } from 'react';
import Marker from './marker';
import GoogleMapReact from 'google-map-react';


class SimpleMap extends Component {
  static defaultProps = {
    center: {lat: 48.884211, lng: 30.33},
    zoom: 11
  };

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <Marker
          lat={this.props.lat}
          lng={this.props.lng}
        />
      </GoogleMapReact>
    );
  }
}

export default SimpleMap;