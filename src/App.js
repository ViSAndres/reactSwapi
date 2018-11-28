import React, { Component } from 'react';
import './App.css';
import Stats from './components/Stats/Stats';



class App extends Component {
  
  render() {
    return (
      <div className = "bodydiv">
        <div className = "titlediv">
        <Stats />
        </div>
      </div>
    );
  }
}

export default App;