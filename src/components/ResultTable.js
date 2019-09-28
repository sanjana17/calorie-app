import React, {Component} from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class ResultTable extends React.Component {

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
					{this.props.dailyIntake.map(row => (
						<TableRow key={row.item}>
							<TableCell component="th" scope="row">
								{row.item}
							</TableCell>
							<TableCell align="right">{this.props.quantity}</TableCell>
							<TableCell align="right">{this.props.unit}</TableCell>
							<TableCell align="right">{row.itemCalories}</TableCell>
						</TableRow>
					))}
					<TableRow>
						<TableCell><b>Total</b></TableCell>
						<TableCell>  </TableCell>
						<TableCell>   </TableCell>
						<TableCell><b>{this.props.sum}</b></TableCell>
					</TableRow>
				</TableBody>
			</Table>
		)
	}
}

export default ResultTable;