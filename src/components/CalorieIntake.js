import React, { Component } from "react";
import './CalorieIntake.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class CalorieIntake extends Component {
    render() {
        return (
            <div className="Calorie-Intake">
                <h2 >Calorie Intake</h2>
                    <div className="row">
                    <div className="col-2"></div>
                    <form className="col-8">
                        <div className="row">
                            <TextField hintText="Item" className="col-3"/>
                            <div className="col-1"></div>
                            <TextField hintText="Quantity" className="col-3"/>
                            <div className="col-1"></div>
                            <TextField hintText="units" className="col-3"/>
                        </div>
                        <div className="row">
                            <RaisedButton label="Default" />
                        </div>
                    </form>
                    <div className="col-2"></div>
                    </div>
            </div>
        );
    }
}

export default CalorieIntake;
