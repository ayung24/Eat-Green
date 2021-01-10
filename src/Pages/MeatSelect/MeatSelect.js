import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { db } from "../../firebase";
import Counter from "../../Components/Counter";
import MeatCard from "../../Components/MeatCard";
import Grid from '@material-ui/core/Grid';



import * as Constants from '../../Constants/Constants';

class MeatSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meatDishes: [],
      // meatImages ={} // make key value pair
    };
  }

  componentDidMount() {
    db.collection("Meat")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
        this.setState({ meatDishes: data });
      });
  }

  render() {
    var meatCards = [];
    this.state.meatDishes.forEach(function(key) {
      // var ImageMeet = (meatImages)[key];
      var meatName = Object.keys(key)[0];
      var meatProtein = Object.values(key)[0];
      meatCards.push(<Grid item><MeatCard name={meatName} protein={meatProtein}/></Grid>);
    });

    return (
      <div>

        <Grid container spacing={2}>
          {meatCards}
       </ Grid>
        <p>This is the meat select page</p>
        <Link to={Constants.ROUTE_VEG_SELECT}>
          <button>Click here to continue to veggie selection...</button>
        </Link>
      </div>
    )
  }
}

export default MeatSelect;