import React, { Component } from "react";

class CalorieNeeds extends Component {
  render() {
      return (
          <div className="jumbotron">
              <h1>Know Your Calorie Needs</h1>
              <form>

                    <label>Gender: </label>
                    <label>Male</label><input type={'radio'} name={'gender'} value={'male'} />
                    <label>Female</label><input type={'radio'} name={'gender'} value={'female'} />
                    <br/>
                  <table align={'center'}>
                      <tbody>
                      <tr><td>Age:</td><td> <input type={'text'} required/> Years</td></tr>
                      <tr><td>Weight:</td><td> <input type={'text'} required/> Kgs</td></tr>
                      <tr><td>Height:</td><td> <input type={'text'} required/> CMs</td></tr>
                      </tbody>
                  </table>
                    <button type={'submit'} className={'btn btn-primary'}>Submit</button>
              </form>
          </div>
      );
  }
}

export default CalorieNeeds;
