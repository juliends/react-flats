import React from 'react';
import flats from '../data/flats';
import Flat from './flat';

// console.log(flats);

const FlatList = (props) => {
  return (
    <div className='flat-list'>
      {
        flats.map(flat => <Flat
          flatDetails={flat}
          key={flat.price} 
          price={flat.price} 
          name={flat.name} 
          imageUrl={flat.imageUrl}
          lat={flat.lat}
          lng={flat.lng}
          handleClick={props.handleClick}
        />
        )
      }
    </div>
  )
}

export default FlatList;