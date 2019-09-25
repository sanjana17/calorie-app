import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CalorieNeeds from './components/CalorieNeeds';
import CalorieIntake from "./components/CalorieIntake";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
    }

    handleToggle = () => this.setState({open: !this.state.open});
  render() {
    return (
      <div className="App">
          <AppBar title="Daily Calorie Report" onLeftIconButtonClick={this.handleToggle} iconElementLeft={<i className="material-icons">menu</i>}/>
          <Drawer open={this.state.open} >
              <MenuItem href="/calorieNeeds">Calorie Needs</MenuItem>
              <MenuItem href="/calorieIntake">Calorie Calculator</MenuItem>
          </Drawer>
          <Router>
              <Route exact path="/calorieIntake" component={ CalorieIntake } />
              <Route exact path="/calorieNeeds" component={ CalorieNeeds } />
          </Router>
      </div>
    );
  }
}

export default App;
