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
        <p className="App-intro">
            <CalorieNeeds/>
        </p>
      </div>
    );
  }
}

export default App;
