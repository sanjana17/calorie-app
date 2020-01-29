import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CalorieNeeds from './components/CalorieNeeds';

import CalorieIntake from "./components/CalorieIntake";
import AppBar from 'material-ui/AppBar';
import FeatureCard from "./components/FeatureCard";
import calorieLog from './img/food.jpeg'
import calorieNeeds from './img/calorieNeeds.jpg'

class App extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div className="App">
          <AppBar title="Daily Calorie Report" onLeftIconButtonClick={this.handleToggle} iconElementLeft={<i className="material-icons">menu</i>}/>
          <div className='row home-page-wrapper'>
              <div className='col-2'/>
              <div className='col-4'>
                  <FeatureCard
                      header='Log your daily calories'
                      description="Log your daily calories"
                      image={calorieLog}
                      href='/calorieIntake'
                  >
                  </FeatureCard>
              </div>
              <div className='col-4'>
                  <FeatureCard
                      header='Know your calorie needs'
                      description="Log your daily calories"
                      image={calorieNeeds}
                      href='/calorieNeeds'
                  >
                  </FeatureCard>
              </div>
              <div className='col-2'/>
          </div>

          <Router>
              <Route exact path="/calorieIntake" component={ CalorieIntake } />
              <Route exact path="/calorieNeeds" component={ CalorieNeeds } />
          </Router>

      </div>
    );
  }
}

export default App;
