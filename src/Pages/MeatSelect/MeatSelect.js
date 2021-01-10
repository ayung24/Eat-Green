import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { db } from "../../firebase";
import MeatCard from "../../Components/MeatCard";


import * as Constants from '../../Constants/Constants';

class MeatSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meatDishes: []
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
      var meatName = Object.keys(key)[0];
      var meatProtein = Object.values(key)[0];
      meatCards.push(<MeatCard name={meatName} protein={meatProtein}/>);
    });

    return (
      <div>
        <div>
          <MeatCard name={"null"} />
        </div>
        <p>This is the meat select page</p>
        <Link to={Constants.ROUTE_VEG_SELECT}>
          <button>Click here to continue to veggie selection...</button>
        </Link>
      </div>
    )
  }
}

export default MeatSelect;