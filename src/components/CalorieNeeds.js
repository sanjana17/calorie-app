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
          <div className="jumbotron">
              <h1>Know Your Calorie Needs</h1>
              <div className={'row'}>
                  <div className={'col-md-4'}></div>
                  <div className={'col-md-4'}>
                      <form onSubmit={(event) => this.handleSubmit(event)}>
                          <div className="form-group ">
                              <label>Gender: </label>
                              <label>Male</label><input type={'radio'} name={'gender'} value={'male'} onChange={this.handleChange} checked={this.state.gender==='male'}/>
                              <label>Female</label><input type={'radio'} name={'gender'} value={'female'} onChange={this.handleChange} checked={this.state.gender==='female'}/>
                          </div>
                          <div className="form-group row">
                            <label>Age:</label><input type={'number'} value={this.state.age} name={'age'} onChange={this.handleChange} placeholder={'age'} required/> Years
                          </div>
                          <div className="form-group row">
                              <label>Weight: </label><input type={'number'} value={this.state.weight} name={'weight'} onChange={(event) => this.handleChange(event)} placeholder={this.state.weightUnit==='kg'?'kg':'lb'} required/>
                              <input type={'radio'} name={'weightUnit'} value={'kg'} onChange={this.handleChange} checked={this.state.weightUnit==='kg'} />Kilos
                              <input type={'radio'} name={'weightUnit'} value={'lb'} onChange={this.handleChange} checked={this.state.weightUnit==='lb'} />Pounds
                          </div>
                          <div className="form-group row">
                              <label>Height:</label> <input type={'number'} value={this.state.height} name='height' onChange={this.handleChange} placeholder={this.state.heightUnit==='ft'?'feet':'cm'} required/>
                              {this.state.heightUnit==='ft' && <input type={'number'} value={this.state.inches} className={this.state.heightUnit==='ft'?'d-block':'d-none'} onChange={this.handleChange}  placeholder={'inches'} required/>}
                              <input type={'radio'} value={'cm'} checked={this.state.heightUnit==='cm'} onChange={this.handleChange} name='heightUnit'/>CMs
                              <input type={'radio'} value={'ft'} checked={this.state.heightUnit==='ft'} onChange={this.handleChange} name='heightUnit'/>Feet & Inches
                          </div>
                          <div className="form-group">
                              <input type={'submit'} className={'btn btn-primary'}  value={'Submit'} />
                              <input type={'button'} className={'btn btn-primary'}  value={'Clear'} onClick={this.clearAll}/>
                          </div>
                      </form>
                        <div className={this.state.hide}>Calorie Needs :{this.state.calories}</div>
                  </div>
                  <div className={'col-md-4'}></div>
              </div>
          </div>
      );
  }
}

export default CalorieNeeds;
