import React, { Component } from "react";

class CalorieIntake extends Component {
    render() {
        return (
            <div className="Calorie-Intake">
                <h2 >Calorie Intake</h2>
                <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-sm">Small</span>
                </div>
                <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"/>
                </div>
            </div>
        );
    }
}

export default CalorieIntake;
