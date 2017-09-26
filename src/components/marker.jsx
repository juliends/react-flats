import React from 'react';

const Marker = (props) => {
  return (
    <div className='marker'>
      {`${props.lat} ${props.lng}`}
    </div>
  );
}

export default Marker;