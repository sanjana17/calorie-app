import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class ResultTable extends React.Component {


    state={
        dailyIntake: this.props.dailyIntake,
        sum: 0,
    }

    componentDidMount(){
    	this.handleSum();
	}

    componentWillReceiveProps(nextProps){
		this.handleSum();
	}

	handleDelete = (itemValue) => {
		console.log(itemValue)
		const items = this.state.dailyIntake.filter(val => {console.log(val.item); return val.item !== itemValue; });
		this.setState({ dailyIntake: items }, () => this.handleSum());
		this.props.setStateToData(items);
	}

	handleSum=()=>{
		console.log("sum")
		let sum =0;
		for(var i=0; i< this.state.dailyIntake.length; i++){
			sum += this.state.dailyIntake[i].itemCalories;
		}
		console.log(sum);
		this.setState({sum: sum});
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
							<TableCell> <b>{this.state.sum}</b>  </TableCell>
						</TableRow>
				</TableBody>
			</Table>
		)
	}
}

export default ResultTable;