import React, { Component } from "react";
import './CalorieIntake.css';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

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

class CalorieIntake extends Component {
    constructor(props){
        super(props);
        this.state ={
            item: '',
            itemCalories: '',
            dailyIntake: [],
        }
    }

    handleChange =(event) => {
        this.setState({ item : event.target.value})
    }

    addValuesDailyIntake=() =>{
        var itemObject = { item: this.state.item, itemCalories: this.state.itemCalories }
        var dailyIntake = this.state.dailyIntake;
        dailyIntake.push(itemObject);
        this.setState({dailyIntake: dailyIntake})
    }

    handleAdd = (event) => {
        console.log("hello")
        let url = "https://api.nutritionix.com/v1_1/search/"+this.state.item+"?results=0:10&fields=item_name,brand_name,item_id,nf_calories&appId=b8c699e1&appKey=b0a1785f6d0c3cf84923d5795cda3160";


        fetch(url).then(res => res.json()).then(data => this.setState({itemCalories:data.hits[0].fields.nf_calories}, () => this.addValuesDailyIntake()));


    }


    render() {
        return (
            <div className="Calorie-Intake">
                <h2 >Calorie Intake</h2>
                    <div className="row">
                    <div className="col-2"></div>
                    <form className="col-8">
                        <div className="row">
                            <TextField hintText="Item" className="col-3" value={this.state.item} onChange={this.handleChange}/>
                            <div className="col-1"></div>
                            <TextField hintText="Quantity" className="col-3"/>
                            <div className="col-1"></div>
                            <TextField hintText="units" className="col-3"/>
                        </div>
                        <div className="row">
                            <RaisedButton label="Add" primary={true} style={style} onClick={this.handleAdd}/>
                        </div>
                    </form>
                    <div className="col-2">
                    </div>
                    </div>
                {this.state.dailyIntake.length > 0 &&
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Item</TableCell>
                            <TableCell align="right">Calories</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.dailyIntake.map(row => (
                            <TableRow key={row.item}>
                                <TableCell component="th" scope="row">
                                    {row.item}
                                </TableCell>
                                <TableCell align="right">{row.itemCalories}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                }
            </div>
        );
    }
}

export default CalorieIntake;
