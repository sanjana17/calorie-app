import React, { Component } from "react";
import './CalorieIntake.css'

class CalorieIntake extends Component {
    render() {
        return (
            <div className="Calorie-Intake">
                <h2 >Calorie Intake</h2>
                    <div className="row">
                    <div className="col-2"></div>
                    <form className="col-8">
                        <div className="row">
                        <div class="group" className="col-3">
                            <input type="Item" required/>
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Food Item</label>
                        </div>
                        &nbsp;&nbsp;
                        <div class="group" className="col-3">
                            <input type="quantity" required/>
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Quantity</label>
                        </div>
                        <span className="col-1"></span>
                        <div class="group" className="col-3">
                            <input type="units" required/>
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>units</label>
                        </div>
                        </div>
                        <button type="button" class="btn btn-primary">Primary</button>
                    </form>
                    <div className="col-2"></div>
                    </div>
            </div>
        );
    }
}

export default CalorieIntake;
