import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
      clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {

    //let minuteInDegrees = 0;
    //let hourInDegrees = 90;
    //let secondInDegrees = 180;
    let minuteInDegrees = ((this.state.date.getHours() * 60) + this.state.date.getMinutes()) * 6;
    let hourInDegrees = (((this.state.date.getHours() % 12) * 60 + this.state.date.getMinutes()) / 720) * 360;
    let secondInDegrees = ((this.state.date.getMinutes() * 60) + this.state.date.getSeconds()) * 6;

    return (
      <div className="clock-container">
        <div className="clock-face">
          <div className="marking marking1"></div>
          <div className="marking marking2"></div>
          <div className="marking marking3"></div>
          <div className="marking marking4"></div>
          <div className="marking marking5"></div>
          <div className="marking marking6"></div>
        </div>
        <div className="clock-hands-container">
          <div className="hour-hand-container" style={{transform: 'rotate(' + hourInDegrees + 'deg)'}}>
            <div className="hour-hand"></div>
          </div>
          <div className="minute-hand-container" style={{transform: 'rotate(' + minuteInDegrees + 'deg)'}}>
            <div className="minute-hand"></div>
          </div>
          <div className="second-hand-container" style={{transform: 'rotate(' + secondInDegrees + 'deg)'}}>
            <div className="second-hand"></div>
          </div>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React!
      //     </a>
      //   </header>
      // </div>

      <div className="App">
        <header className="App-header">
          <Clock />
        </header>
      </div>
    );
  }
}

export default App;
