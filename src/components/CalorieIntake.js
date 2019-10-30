import React, {Component} from "react";
import './CalorieIntake.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import ResultTable from './ResultTable';


const style = {
	margin: 12,
};


function renderSuggestion(suggestion, {query}) {
	const matches = match(suggestion.food_name, query);
	const parts = parse(suggestion.food_name, matches);
	
	return (
		<span className='suggestion-content'>
			<img src={suggestion.photo.thumb} className='suggestion-image' alt="no"/>
			{parts.map((part, index) => {
				const className = part.highlight ? 'react-autosuggest__suggestion-match' : null;
				
				return (
					<span className={className} key={index}>
			      {part.text}
                </span>
				);
			})}
    </span>
	);
}

class CalorieIntake extends Component {
	constructor(props) {
		super(props);
		this.state = {
			item: '',
			itemCalories: '',
			dailyIntake: [],
			foodItems: [],
			quantity: '',
			unit: '',
			totalCalories:0,
		}
	}
	
	handleChange = (event, {newValue}) => {
		this.setState({item: newValue})
	}

    setStateToData= (data) =>{
		this.setState(state => ({
			...state,
			dailyIntake: data,
		}))
	}
	
	onSuggestionsFetchRequested = () => {
		if (this.state.item.length > 2) {
			var url = "https://trackapi.nutritionix.com/v2/search/instant?query=" + this.state.item + "&self=true&branded=true&common=true&common_general=true&common_grocery=true&common_restaurant=true&detailed=false&claims=false";
			fetch(url, {
				method: 'GET',
				headers: {
					'x-app-id': 'b8c699e1',
					'x-app-key': 'b0a1785f6d0c3cf84923d5795cda3160'
				}
			}).then(response => (response.json())).then(data => {
				this.setState({foodItems: data.common});
			});
		}
	};
	
	// Autosuggest will call this function every time you need to clear suggestions.
	onSuggestionsClearRequested = () => {
		this.setState({
			foodItems: []
		});
	};
	addValuesDailyIntake = () => {
		var itemObject = {item: this.state.item, itemCalories: this.state.itemCalories, quantity: this.state.quantity, unit: this.state.unit}
		var dailyIntake = this.state.dailyIntake;
		dailyIntake.push(itemObject);
		this.setState({dailyIntake: dailyIntake})
	}
	
	handleAdd = (event) => {
		let url = "https://api.nutritionix.com/v1_1/search/" + this.state.item + "?results=0:10&fields=item_name,brand_name,item_id,nf_calories&appId=b8c699e1&appKey=b0a1785f6d0c3cf84923d5795cda3160";
		fetch(url).then(res => res.json()).then(data => this.setState({itemCalories: data.hits[0].fields.nf_calories, totalCalories: this.state.totalCalories+data.hits[0].fields.nf_calories}, () => this.addValuesDailyIntake()));
		
	}
	
	// input value for every given suggestion.
	getSuggestionValue = suggestion => {
		this.setState({quantity:suggestion.serving_qty, unit:suggestion.serving_unit})
		return suggestion.food_name;
	}
	
	
	render() {
		
		const inputProps = {
			placeholder: 'Type food item',
			value: this.state.item,
			onChange: this.handleChange
		};
		
		
		return (
			<div className="Calorie-Intake">
				<h2>Calorie Log</h2>
				<div className="row">
					<div className="col-2"></div>
					<form className="col-8">
						<div className="row">
							<Autosuggest
								suggestions={this.state.foodItems}
								onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
								onSuggestionsClearRequested={this.onSuggestionsClearRequested}
								getSuggestionValue={this.getSuggestionValue}
								renderSuggestion={renderSuggestion}
								inputProps={inputProps}
							/>
							<div className="col-1"></div>
							<TextField hintText="Quantity" className="col-3" value={this.state.quantity}/>
							<div className="col-1"></div>
							<TextField hintText="units" className="col-3" value={this.state.unit}/>
						</div>
						<div className="row">
							<RaisedButton label="Add" primary={true} style={style} onClick={this.handleAdd}/>
						</div>
					</form>
					<div className="col-2">
					</div>
					<div className="col-2"></div>
					<div className="col-8">
						{this.state.dailyIntake.length > 0 &&
						<ResultTable dailyIntake={this.state.dailyIntake} quantity={this.state.quantity} unit={this.state.unit} setStateToData={this.setStateToData}/>
						}
					</div>
					<div className="col-2"></div>
				</div>
			</div>
		);
	}
}

export default CalorieIntake;
