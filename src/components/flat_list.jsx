import React from 'react';
import Flats from '../data/flats';
import Flat from './flat';

console.log(Flats);

const FlatList = (props) => {
  return(
    <div>
      {Flats.map(flat => <Flat/>)}
    </div>
  )
}

export default FlatList;