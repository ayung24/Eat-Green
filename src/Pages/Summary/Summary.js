import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { db } from "../../firebase";

import * as Constants from '../../Constants/Constants';

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
    render(){
        return(
            <div>
                <p>This is the summary page</p>
                <Link to={Constants.ROUTE_HOME}>
                    <button>Click here to continue to go back to home page...</button>
                </Link>
            </div>
        )
    }
}

export default Summary;