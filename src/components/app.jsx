import React, { Component } from 'react';
import Flat from './flat';
import FlatList from './flat_list';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render(){
    return (
      <FlatList/>
    )
  }
}

export default App;