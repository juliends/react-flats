import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Flat from './flat';
import FlatList from './flat_list';
import flats from '../data/flats';
import SimpleMap from './simple_map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {lat: flats[0].lat, lng: flats[0].lng}
  }

  handleSelectFlat = (latitude, longitude) => {
    this.setState({lat: latitude, lng: longitude});
  }

  render() {
    return (
      <div>
        <div className='flat-list'>
          <FlatList flats={flats} handleClick={this.handleSelectFlat}/>
        </div>
        <div className='map-container'>
          <SimpleMap lat={this.state.lat} lng={this.state.lng} />
        </div>
      </div>
    );
  }
}

export default App;