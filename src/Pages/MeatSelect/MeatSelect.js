import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { db } from "../../firebase";
import MeatCard from "../../Components/MeatCard";
import Grid from '@material-ui/core/Grid';
import PorkImage from "../../Assets/pork.png";
import BeefImage from "../../Assets/steak.png";
import ChickenImage from "../../Assets/chicken.png";
import BurritoImage from "../../Assets/burrito.png";
import HamburgerImage from "../../Assets/burger.png";
import * as Constants from '../../Constants/Constants';
import Button from '@material-ui/core/Button';

class MeatSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meatDishes: [],
      meatImages: {}
    };
  }

  componentDidMount() {
    db.collection("Meat")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        this.setState({ meatDishes: data });
      });
  }

  getTotal() {
      var proteinVals = [];
      this.state.meatDishes.forEach(function(key) {
        var meatProtein = Object.values(key)[0];
        proteinVals.push(meatProtein);
      });
      const total = (Number(localStorage.getItem(Constants.LOCAL_STORAGE_PORK))*proteinVals[0]) 
      + (Number(localStorage.getItem(Constants.LOCAL_STORAGE_BEEF))*proteinVals[1]) 
      + ( Number(localStorage.getItem(Constants.LOCAL_STORAGE_CHICKEN_BREAST))*proteinVals[2]) 
      + (Number(localStorage.getItem(Constants.LOCAL_STORAGE_HAMBURGER))*proteinVals[3]) 
      + (Number(localStorage.getItem(Constants.LOCAL_STORAGE_BURRITO))*proteinVals[4]);
      return localStorage.setItem(Constants.LOCAL_STORAGE_MEAT_TOTAL, total);
  }

  render() {
    var meatImages = {
      Pork: PorkImage,
      Beef: BeefImage,
      Chickenbreast: ChickenImage,
      Burrito: BurritoImage,
      Hamburger: HamburgerImage,
    };
    var meatCards = [];
    this.state.meatDishes.forEach(function (key) {
      var meatName = Object.keys(key)[0];
      meatName = meatName.replace(/\s/g, '');
      var ImageMeat = (meatImages)[meatName];
      var meatProtein = Object.values(key)[0];
      meatCards.push(<Grid key={"meat-grid" + meatName}alignitems="center" item><MeatCard key={"meat-" + meatName} name={meatName} image={ImageMeat} protein={meatProtein} cardType={Constants.CARD_MEAT}/></Grid>);
    });

    return (
      <div>
        <Grid item style={{display:"flex",align:"center",alignItems:"center",flexDirection:"column", paddingTop: "200px"}}>
          <Grid justify="center" alignitems="center" key="meat-grid2" container spacing={10}>
          <h1>Select your meat choice!</h1>
          </Grid>
          <Grid style={{paddingTop: "100px"}}justify="center" alignitems="center" container spacing={10}>
            {meatCards}
          </ Grid>
          <Link to={Constants.ROUTE_VEG_SELECT}>
            <Button  style={{marginTop: "100px", marginBottom: "100px"}}variant="contained" color="primary" onClick={this.getTotal.bind(this)} > NEXT </Button>
          </Link>
        </Grid>
      </div>
    )
  }
}

export default MeatSelect;