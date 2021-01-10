import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import * as Constants from '../../Constants/Constants';
import Man from "../../Assets/man.png";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';




    class Home extends Component {
        render() {
            return (
                <div>
                <Grid container>
                <Grid item xs={6} style={{display:"flex",justifyContent:"center",align:"center",alignitems:"center",flexDirection:"column"}}>
                
                <Typography style={{paddingLeft:"50px"}} variant="h1" component="h2" justify="center" alignitems="center" >
                 EatGreens!
                </Typography>
                <Grid item style={{paddingLeft:"50px"}}>
                <h2>An application to help people learn how to transition to a Vegetarian diet.</h2> 
                <h2> Preventing protein deficiencies and more!</h2>
                <Link to={Constants.ROUTE_MEAT_SELECT}>
                        <Button variant="contained" color="primary"> Click here to continue!</Button>
                    </Link>
                </Grid>
                </Grid>
                <Grid  item xs={6}>
              <div>
                <img alt="man" src = {Man} style={{maxWidth:"50vw"}}></img>
              </div>
                
                </Grid>
                </Grid>
                <Grid item xs={12}>
                    
                </Grid>
                <Grid  item xs={12}>
                   
                </Grid>
                    
                </div>
            )
        }
    }
    export default Home;


