import React, { Component } from "react";
import './CalorieIntake.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const style = {
    margin: 12,
};

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
                            <RaisedButton label="Primary" primary={true} style={style} />
                            <RaisedButton label="Secondary" secondary={true} style={style} />
                        </div>
                    </form>
                    <div className="col-2"></div>
                    </div>
            </div>
        );
    }
}

export default CalorieIntake;
