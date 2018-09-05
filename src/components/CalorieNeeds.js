import React, { Component } from "react";

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
        var age= parseInt(this.state.age);
        var height= parseInt(this.state.height);
        var weight= parseInt(this.state.weight);
        var gender= this.state.gender;
        var weightUnit= this.state.weightUnit;
        var heightUnit= this.state.heightUnit;
        var inches= parseInt(this.state.inches);

        var calories;

        if(weightUnit==='lb'){
            weight=weight*0.453592;
        }
        if(heightUnit==='ft'){
            var totalInches= (height * 12)+inches;
            height=totalInches*2.54;
        }


        this.setState({hide:'d-block'})
        if(gender==='male'){
            calories = 10 * weight + 6.25 * height - 5 * age + 5;
        }
        else{
            calories= 10 * weight + 6.25 * height - 5 * age - 161;
        }
        this.setState({calories:Math.round(calories)});
        document.getElementsByClassName('.d-none')
        event.preventDefault();
    }

  render() {
      return (
          <div className="jumbotron">
              <h1>Know Your Calorie Needs</h1>
              <form onSubmit={this.handleSubmit}>
                    <label>Gender: </label>
                    <label>Male</label><input type={'radio'} name={'gender'} value={'male'} onChange={this.handleChange} checked={this.state.gender==='male'}/>
                    <label>Female</label><input type={'radio'} name={'gender'} value={'female'} onChange={this.handleChange} checked={this.state.gender==='female'}/>

                  <table align={'center'}>
                      <tbody>
                      <tr><td>Age:</td><td> <input type={'number'} value={this.state.age} name={'age'} onChange={this.handleChange} placeholder={'age'} required/> </td><td>Years</td></tr>
                      <tr><td>Weight:</td><td> <input type={'number'} value={this.state.weight} name={'weight'} onChange={this.handleChange} placeholder={this.state.weightUnit==='kg'?'kg':'lb'} required/> </td>
                          <td>Kgs<input type={'radio'} name={'weightUnit'} value={'kg'} onChange={this.handleChange} checked={this.state.weightUnit==='kg'} ></input></td>
                          <td>Lbs<input type={'radio'} name={'weightUnit'} value={'lb'} onChange={this.handleChange} checked={this.state.weightUnit==='lb'} ></input></td>
                      </tr>
                      <tr><td>Height:</td><td> <input type={'number'} value={this.state.height} name='height' onChange={this.handleChange} placeholder={this.state.heightUnit==='ft'?'feet':'cm'} required/>  <input type={'number'} value={this.state.inches} name={'inches'} className={this.state.heightUnit==='ft'?'d-block':'d-none'} onChange={this.handleChange}  placeholder={'inches'} required/></td>
                          <td>cms<input type={'radio'} value={'cm'} checked={this.state.heightUnit==='cm'} onChange={this.handleChange} name='heightUnit'></input></td>
                          <td>Feet & inches<input type={'radio'} value={'ft'} checked={this.state.heightUnit==='ft'} onChange={this.handleChange} name='heightUnit'></input></td>
                      </tr>
                      </tbody>
                  </table>
                    <input type={'submit'} className={'btn btn-primary'}  value={'Submit'} />
                    <input type={'button'} className={'btn btn-primary'}  value={'Clear'} onClick={this.clearAll}/>
              </form>
              <div className={this.state.hide}>Calorie Needs :{this.state.calories}</div>
          </div>
      );
  }
}

export default CalorieNeeds;
