import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalorieNeeds from './components/CalorieNeeds';
import CalorieIntake from "./components/CalorieIntake";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <CalorieIntake/>
        </header>
        <div className="App-intro">
            <CalorieNeeds/>
        </div>
      </div>
    );
  }
}

export default App;
