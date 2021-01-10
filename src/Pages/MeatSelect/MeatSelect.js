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
import Counter from "../../Components/Counter";
import * as Constants from '../../Constants/Constants';

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
    this.state.meatDishes.forEach(function(key) {
      var meatName = Object.keys(key)[0];
      meatName = meatName.replace(/\s/g, '');
      var ImageMeat = (meatImages)[meatName];
      var meatProtein = Object.values(key)[0];
      meatCards.push(<Grid item><MeatCard name={meatName} image={ImageMeat} protein={meatProtein}/></Grid>);
    });

    return (
      <div>
        <Grid container spacing={2}>
          {meatCards}
       </ Grid>
        <p>This is the meat select page</p>
        <Link to={Constants.ROUTE_VEG_SELECT}>
          <button onClick={this.getTotal.bind(this)}>Click here to continue to veggie selection...</button>
        </Link>
      </div>
    )
  }
}

export default MeatSelect;