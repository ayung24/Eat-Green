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
        const selectedProteins = [];
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
                selectedProteins.push(fishQuantity + " x " + fishName);
            }
        });
        this.state.nuts.forEach(function (key) {
            var nutName = Object.keys(key)[0];
            var nutQuantity = Number(localStorage.getItem(nutName));
            if (Number(localStorage.getItem(nutName)) > 0) {
                selectedProteins.push(nutQuantity + " x " + nutName);
            }
        });
        this.state.veg.forEach(function (key) {
            var vegName = Object.keys(key)[0];
            var vegQuantity = Number(localStorage.getItem(vegName));
            if (Number(localStorage.getItem(vegName)) > 0) {
                selectedProteins.push(vegQuantity + " x " + vegName);
            }
        });
        const totalProtein = Number(localStorage.getItem(Constants.LOCAL_STORAGE_MEAT_TOTAL));
        console.log(selectedProteins);
        return(
            <div>
                <span>Total Protein: {totalProtein}</span>
                <ol>
                    {selectedProteins.map(protein => (
                        <li style={{"list-style-type": "none"}} key={protein}>{protein}</li>
                    ))}
                </ol>
                <p>This is the summary page</p>
                <Link to={Constants.ROUTE_HOME}>
                    <button>Click here to continue to go back to home page...</button>
                </Link>
            </div>
        )
    }
}

export default Summary;