import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { db } from "../../firebase";
import * as Constants from '../../Constants/Constants';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors';
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: green[900]
        },
        background: {
            default: "#AED581"
        }
    }
})

class Summary extends Component{
    constructor(props) {
        super(props);
        this.state = {
          meatDishes: [],
          veg: [],
          fish: [],
          nuts: [],
          dairySoy: []
        };
      }

      componentDidMount() {
        db.collection("Meat")
          .get()
          .then(querySnapshot => {
            const meat = querySnapshot.docs.map(doc => doc.data());
            this.setState({ meatDishes: meat });
          });
          db.collection("Vegetables")
          .get()
          .then(querySnapshot => {
              const veggies = querySnapshot.docs.map(doc => doc.data());
              this.setState({ veg: veggies });
          });
          db.collection("Fish")
          .get()
          .then(querySnapshot => {
              const fishie = querySnapshot.docs.map(doc => doc.data());
              this.setState({ fish: fishie });
          });
          db.collection("Nuts")
          .get()
          .then(querySnapshot => {
              const nut = querySnapshot.docs.map(doc => doc.data());
              this.setState({ nuts: nut });
          });
          db.collection("dairySoy")
          .get()
          .then(querySnapshot => {
              const ds = querySnapshot.docs.map(doc => doc.data());
              this.setState({ dairySoy: ds });
          });
      }

      resetData() {
          localStorage.clear();
      }

    render(){

        const selectedProteins = [];
        const selectedVeg = [];
        this.state.meatDishes.forEach(function (key) {
            var meatName = Object.keys(key)[0];
            var meatQuantity = Number(localStorage.getItem(meatName));
            if (Number(localStorage.getItem(meatName)) > 0) {
                selectedProteins.push(meatQuantity + " x " + meatName);
            }
        });
        this.state.fish.forEach(function (key) {
            var fishName = Object.keys(key)[0];
            var fishQuantity = Number(localStorage.getItem(fishName));
            if (Number(localStorage.getItem(fishName)) > 0) {
                selectedVeg.push(fishQuantity + " x " + fishName);
            }
        });
        this.state.nuts.forEach(function (key) {
            var nutName = Object.keys(key)[0];
            var nutQuantity = Number(localStorage.getItem(nutName));
            if (Number(localStorage.getItem(nutName)) > 0) {
                selectedVeg.push(nutQuantity + " x " + nutName);
            }
        });
        this.state.veg.forEach(function (key) {
            var vegName = Object.keys(key)[0];
            var vegQuantity = Number(localStorage.getItem(vegName));
            if (Number(localStorage.getItem(vegName)) > 0) {
                selectedVeg.push(vegQuantity + " x " + vegName);
            }
        });
        const totalProtein = Number(localStorage.getItem(Constants.LOCAL_STORAGE_MEAT_TOTAL));

        return(
            <ThemeProvider theme={theme}>
            <CssBaseline />
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh'}}>
                <Grid>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 50}}>
                    <Typography variant = "h6">
                        Here is your meal completely in meat alternatives—enjoy!
                    </Typography>
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '30vh'}}>
                    <Grid container spacing = {5} justify = "center">
                        <Grid item>
                            <Paper style = {{ height:300, width:200 }}>
                            <Typography
                                style={{
                                fontWeight: "bold",
                                color: "black",
                                paddingTop: "80px",
                                paddingLeft: "10px",
                                position: "flex", // child
                                bottom: 420, // position where you want
                                left: 370
                                }}>
                                <ol>
                                    {selectedProteins.map(protein => (
                                    <li style={{"list-style-type": "none"}} key={protein}>{protein}</li>
                                    ))}
                                </ol>
                            </Typography>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper style = {{ height:300, width:200 }}>
                            <Typography
                                style={{
                                fontWeight: "bold",
                                color: "black",
                                paddingTop: "80px",
                                paddingLeft: "10px",
                                position: "flex", // child
                                bottom: 420, // position where you want
                                left: 600
                                }}>
                                <ol>
                                    {selectedVeg.map(protein => (
                                    <li style={{"list-style-type": "none"}} key={protein}>{protein}</li>
                                    ))}
                                </ol>
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 50}}>
                    <Typography variant = "h6">
                        Your total intake of protein from this meal is: {totalProtein} g!
                    </Typography>
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '10vh'}}>
                        <Link to={Constants.ROUTE_HOME}>
                        <Button
                        endIcon={<HomeIcon />}
                        size="large"
                        variant="contained"
                        color="primary"
                        onClick={this.resetData.bind(this)}>
                            BACK TO HOME
                        </Button>
                        </Link>
                </div>
                </Grid>
            </div>
            </ThemeProvider>
        )
    }
}

export default Summary;