import React from 'react';
import flats from '../data/flats';
import Flat from './flat';

// console.log(flats);

const FlatList = (props) => {
  return (
    <div className='flat-list'>
      {
        flats.map(flat => <Flat key={flat.price} price={flat.price} name={flat.name} imageUrl={flat.imageUrl}/>)
      }
    </div>
  )
}

export default FlatList;