import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalorieNeeds from './components/CalorieNeeds';
import CalorieIntake from "./components/CalorieIntake";
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
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
              <MenuItem>Menu Item</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
          </Drawer>
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
