import React, { Component } from 'react';
import Flat from './flat';
import FlatList from './flat_list';
import GoogleMapReact from 'google-map-react';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    return (
      <div>
        <FlatList/>
        <GoogleMapReact
          defaultCenter={{lat: 59.95, lng: 30.33}}
          defaultZoom={10}
        />
      </div>
    )
  }
}

export default App;