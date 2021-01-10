import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import * as Constants from '../../Constants/Constants';
import { makeStyles } from '@material-ui/core/styles';
import Man from "../../Assets/man.png";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';




    class Home extends Component {
        render() {
            return (
                <div>
                <Grid container>
                <Grid item xs={6} style={{display:"flex",justifyContent:"center",align:"center",alignItems:"center",flexDirection:"column"}}>
                
                <Typography variant="h1" component="h2" justify="center" alignItems="center" >
                 EatGreens!
                </Typography>
                <Grid  item xs={6}>
                <h2>An application to help people learn how to transition to a Vegetarian diet.</h2> 
                <h2> Preventing protein deficiencies and more!</h2>
                <Link to={Constants.ROUTE_MEAT_SELECT}>
                        <Button variant="contained" color="primary"> Click here to continue!</Button>
                    </Link>
                </Grid>
                </Grid>
                <Grid  item xs={6}>
              <div>
                <img src = {Man} style={{maxWidth:"50vw"}}></img>
              </div>
                
                </Grid>
                </Grid>
                <Grid  spacing={10} item xs={12}>
                    
                </Grid>
                <Grid  spacing={10} item xs={12}>
                   
                </Grid>
                    
                </div>
            )
        }
    }
    export default Home;


