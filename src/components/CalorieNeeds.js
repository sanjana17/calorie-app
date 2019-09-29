import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';

class CalorieNeeds extends Component {
    constructor(props) {
        super(props);
        this.state = {age: '', height:'', weight:'', gender:'male',calories:'',hide:'d-none', weightUnit:'kg',heightUnit:'cm',inches:''};
        this.handleChange= this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        this.clearAll= this.clearAll.bind(this);
        this.toggleDisplay= this.toggleDisplay.bind(this);

    }
    handleChange(event){
        const target= event.target;
        const value= target.value;
        const name= target.name;
        this.setState({[name]:value})
        this.setState({hide:'d-none'})
    }
    clearAll(event){
        this.setState( {age: '', height:'', weight:'', gender:'male',calories:'',hide:'d-none'});
    }
    toggleDisplay(key,value){
        if(key !== value){
            return 'd-block';
        }else{
            return 'd-none';
        }
    }
    handleSubmit(event){
        let age= Number(this.state.age);
        var height= Number(this.state.height);
        var weight= Number(this.state.weight);
        var gender= this.state.gender;
        var weightUnit= this.state.weightUnit;
        var heightUnit= this.state.heightUnit;
        var inches= Number(this.state.inches);

        var calories;

        if(weightUnit==='lb'){
            weight=weight*0.453592;
        }
        if(heightUnit==='ft'){
            var totalInches= (height * 12)+inches;
            height=totalInches*2.54;
        }


        this.setState({hide:'false'})
        if(gender==='male'){
            calories = 10 * weight + 6.25 * height - 5 * age + 5;
        }
        else{
            calories= 10 * weight + 6.25 * height - 5 * age - 161;
        }
        console.log(calories)
        this.setState({calories:Math.round(calories)});
        document.getElementsByClassName('.d-none')
        event.preventDefault();
    }

  render() {
      return (
          <div className="row">
            <div class="col s12 m5">
            <div class="card-panel teal">
            <h1>Know Your Calorie Needs</h1>
                  <div className='col-md-4'></div>
                  <div className='col-md-4'>
                      <form onSubmit={(event) => this.handleSubmit(event)}>
                          <FormControl component="fieldset" className='radio'>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender" value={this.state.gender} onChange={this.handleChange}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                            </FormControl>
                            <TextField hintText="Age" value={this.state.age} name='age' onChange={this.handleChange} required/>
                            <TextField hintText="Weight" value={this.state.weight} name='weight' onChange={this.handleChange} required/>
                            <FormLabel component="legend">Unit</FormLabel>
                            <RadioGroup aria-label="unit" name="weightUnit" value={this.state.weightUnit} onChange={this.handleChange}>
                            <FormControlLabel value="lb" control={<Radio />} label="LB" />
                            <FormControlLabel value="kg" control={<Radio />} label="KG" />
                            </RadioGroup>
                            <TextField hintText="Height" value={this.state.height} name='height' onChange={this.handleChange} required/>
                            <FormLabel component="legend">height unit</FormLabel>
                            <RadioGroup aria-label="heightunit" name="heightUnit" value={this.state.heightUnit} onChange={this.handleChange} className='radio'>
                            <FormControlLabel value="cm" control={<Radio />} label="CM" />
                            <FormControlLabel value="ft" control={<Radio />} label="FT" />
                            </RadioGroup>
                          <div className="form-group">
                              <input type='submit' className='btn btn-primary'  value='Submit' />
                              <input type='button' className='btn btn-primary'  value='Clear' onClick={this.clearAll}/>
                          </div>
                      </form>
                        <div className={this.state.hide}>Calorie Needs :{this.state.calories}</div>
                  </div>
                  <div className='col-md-4'></div>
                  </div>
                  </div>
          </div>
      );
  }
}

export default CalorieNeeds;
