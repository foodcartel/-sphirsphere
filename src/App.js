import React, { Component } from 'react';
import members from './members';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bandName: '',
      drummers: members.drummers,
      guitarists: members.guitarists,
      bassists: members.bassists,
      drummer: undefined,
      guitarist: undefined,
      bassist: undefined,
    };
    this.changeBandName = this.changeBandName.bind(this);
    this.selectGuitarist = this.selectGuitarist.bind(this);
    this.selectDrummer = this.selectDrummer.bind(this);
    this.selectBassist = this.selectBassist.bind(this);

  }
  
  changeBandName(event) {
    this.setState({bandName: event.target.value});
  }

  selectGuitarist(event) {
    this.setState({guitarist: event.target.innerHTML});
  }

  selectDrummer(event) {
    this.setState({drummer: event.target.innerHTML});
  }

  selectBassist(event) {
    this.setState({bassist: event.target.innerHTML});
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
          <div><ul>{this.state.guitarists.map(item => <li onClick={event => this.selectGuitarist(event)}>{item}</li>)}</ul></div>
        </div>
        <div>
          <span>Select durmmer</span>
          <div><ul>{this.state.drummers.map(item => <li onClick={event => this.selectDrummer(event)}>{item}</li>)}</ul></div>
        </div>
        <div>
          <span>Select bassist</span>
          <div><ul>{this.state.bassists.map(item => <li onClick={event => this.selectBassist(event)}>{item}</li>)}</ul></div>
        </div>

        <div>
          <span>The band: {this.state.bandName}</span>
          <div>band members</div>
          <div><span>Guitarist: {this.state.guitarist}</span></div>
          <div><span>Drummer: {this.state.drummer}</span></div>
          <div><span>Bassist: {this.state.bassist}</span></div>
        </div>
      </div>
    );
  }
}

export default App;
