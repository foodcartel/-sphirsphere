import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bandName: ''
    };
    this.changeBandName = this.changeBandName.bind(this);
  }
  
  changeBandName(event) {
    this.setState({bandName: event.target.value});
    console.log(event.target.value);
  }
  
  render() {
    return (
      <div className="App">
        <div className="title">
          <span>Band Name: </span>
          <input name="band" onChange={event => this.changeBandName(event)} value={this.state.bandName}/>
        </div>
        <div>
          <span>Select guitarist</span>
          <div> guitarists</div>
        </div>
        <div>
          <span>Select durmmer</span>
          <div> drummers</div>
        </div>
        <div>
          <span>Select singer</span>
          <div> drummers</div>
        </div>

        <div>
          <span>The band: {this.state.bandName}</span>
          <div>band members</div>
        </div>
      </div>
    );
  }
}

export default App;
