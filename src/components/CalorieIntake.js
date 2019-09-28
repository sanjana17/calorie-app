import React, {Component} from "react";
import './CalorieIntake.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
// import Select from 'react-select';

const style = {
	margin: 12,
};

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing(3),
		overflowX: 'auto',
	},
	table: {
		minWidth: 650,
	},
}));

function renderSuggestion(suggestion, {query}) {
	const matches = match(suggestion.food_name, query);
	const parts = parse(suggestion.food_name, matches);
	
	return (
		<span className='suggestion-content'>
			<img src={suggestion.photo.thumb} className='suggestion-image'/>
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
			unit: ''
		}
	}
	
	handleChange = (event, {newValue}) => {
		this.setState({item: newValue})
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
				console.log(data);
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
		var itemObject = {item: this.state.item, itemCalories: this.state.itemCalories}
		var dailyIntake = this.state.dailyIntake;
		dailyIntake.push(itemObject);
		this.setState({dailyIntake: dailyIntake})
	}
	
	handleAdd = (event) => {
		console.log("hello")
		let url = "https://api.nutritionix.com/v1_1/search/" + this.state.item + "?results=0:10&fields=item_name,brand_name,item_id,nf_calories&appId=b8c699e1&appKey=b0a1785f6d0c3cf84923d5795cda3160";
		
		
		fetch(url).then(res => res.json()).then(data => this.setState({itemCalories: data.hits[0].fields.nf_calories}, () => this.addValuesDailyIntake()));
		
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
							{/*<TextField hintText="Item" className="col-3"  value={this.state.item}*/}
							{/*onChange={this.handleChange}/>*/}
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
						<Table>
							<TableHead>
								<TableRow>
									<TableCell>Item</TableCell>
									<TableCell align="right">Quantity</TableCell>
									<TableCell align="right">Unit</TableCell>
									<TableCell align="right">Calories</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{this.state.dailyIntake.map(row => (
									<TableRow key={row.item}>
										<TableCell component="th" scope="row">
											{row.item}
										</TableCell>
										<TableCell align="right">{this.state.quantity}</TableCell>
										<TableCell align="right">{this.state.unit}</TableCell>
										<TableCell align="right">{row.itemCalories}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
						}
					</div>
					<div className="col-2"></div>
				</div>
			</div>
		);
	}
}

export default CalorieIntake;
