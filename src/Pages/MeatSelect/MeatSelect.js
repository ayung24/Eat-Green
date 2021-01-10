import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import RecipeReviewCard from '../../Components/Meat/Meat.js'


import * as Constants from '../../Constants/Constants';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));



    function MeatSelect() {
    const classes = useStyles();
    var y = 10;

    return (
    
      <div className={classes.root}>
         
        <Grid container spacing={3}>
          <Grid item xs={12} container>
          </Grid>
          <Grid item xs={12} container>
          </Grid>
          <Grid item xs={12} container>
          </Grid>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}> Select Your Meat Dish! </Paper>
          </Grid>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={3}>
          <RecipeReviewCard> </RecipeReviewCard>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}> Total Protein: {y} </Paper>
          </Grid>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={4}>
          </Grid>
          <Grid container item xs={4}>
            <Button variant="contained" color="primary">
            Next 
            </Button>
          </Grid>
          <Grid item xs={4}>
          </Grid>
        </Grid>
        <p>This is the meat select page</p>
                <Link to={Constants.ROUTE_VEG_SELECT}>
                    <button>Click here to continue to veggie selection...</button>
                </Link>
      </div>
    );
  }

export default MeatSelect;