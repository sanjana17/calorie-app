import React, { Component } from 'react';
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';


class FeatureCard extends Component {
    state={
        show: true
    }

    featureClick = () => {
        this.setState({show: false})
    }

    render() {
        return(
            <div>
                {this.state.show && <Card>
                    <CardHeader
                        title={this.props.header}
                    />
                    <CardMedia
                        image={this.props.image}
                        title="Paella dish"
                        className='card-image'
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {this.props.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <a variant="contained" color="primary" href={this.props.href} onClick={this.featureClick}>Click
                            here</a>
                    </CardActions>
                </Card>
                }
            </div>
        );
    }
}

export default FeatureCard