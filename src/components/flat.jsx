import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="card" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('https://kitt.lewagon.com/placeholder/cities/shanghai`}}>
        <div className="card-category">TODO props.price</div>
        <div className="card-description">
          <h2>Le Wagon Shanghai</h2>
        </div>
        <a className="card-link" href="#" ></a>
      </div>
    )
  }
}

export default Flat;