import React, { Component } from 'react';

class Flat extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="card">
        <div className="card-category">Popular</div>
        <div className="card-description">
          <h2>Le Wagon Shanghai</h2>
          <p>Very cool city, the best</p>
        </div>
        <img className="card-user" src="https://kitt.lewagon.com/placeholder/users/tgenaitay"/>
        <a className="card-link" href="#" ></a>
      </div>
    )
  }
}

export default Flat;