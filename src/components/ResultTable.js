import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class ResultTable extends React.Component {

	constructor(props){
		super(props);
		this.state={
			dailyIntake: [],
			sum: 0,
		}
	}

	static getDerivedStateFromProps(props, state) {
		return {
			...state,
			dailyIntake: props.dailyIntake,
		}
	}

	handleDelete = (itemValue) => {
		const items = this.state.dailyIntake.filter(val => val.item !== itemValue);
		this.setState({ dailyIntake: items });
	}

	handleSum=()=>{
		console.log("sum")
		var sumProps = prop => (sum, obj) => sum += obj[prop];
		var calories = this.state.dailyIntake.reduce( sumProps('itemCalories'));
		console.log(calories)
		this.setState({sum : calories});
	}

	render() {
		return (
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
							<TableCell align="right">{row.quantity}</TableCell>
							<TableCell align="right">{row.unit}</TableCell>
							<TableCell align="right">{row.itemCalories}</TableCell>
							<TableCell align="right"><button className="waves-effect waves-teal btn-flat" onClick={() => this.handleDelete(row.item)}><i className="material-icons">delete_outline</i></button></TableCell>
						</TableRow>
					))}
						<TableRow>
							<TableCell><b>Total</b></TableCell>
							<TableCell>  </TableCell>
							<TableCell>   </TableCell>
							<TableCell><b>{this.handleSum}</b></TableCell>
						</TableRow>
				</TableBody>
			</Table>
		)
	}
}

export default ResultTable;