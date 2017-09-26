import React, { Component } from 'react';
import Flat from './flat';
import FlatList from './flat_list';
import GoogleMapReact from 'google-map-react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultCenter: {lat: 59.95, lng: 30.33},
      defaultZoom: 9
    }
  }

  selectedFlat = (coordinates) => {
    console.log(coordinates);
    this.setState({ defaultCenter: {lat: coordinates[0],lng: coordinates[1]}});
  }
  
  render(){
    return (
      <div>
        <FlatList selectedCard={this.selectedFlat}/>
        <div className="map-container">
          <GoogleMapReact
            defaultCenter={this.state.defaultCenter}
            defaultZoom={this.state.defaultZoom}
          />
        </div>
      </div>
    )
  }
}

export default App;