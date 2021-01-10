import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { db } from "../../firebase";
import * as Constants from '../../Constants/Constants';
// import {arr} from '../MeatSelect';

const testData = [
    { bgcolor: "#00695c", completed: 50 }
  ];

class VegSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            veg: [],
            fish: [],
            nuts: [],
            dairySoy: []
        };
    }

    componentDidMount() {
        db.collection("Vegetables")
            .get()
            .then(querySnapshot => {
                const veggies = querySnapshot.docs.map(doc => doc.data());
                console.log(veggies);
                this.setState({ veg: veggies });
            });
            db.collection("Fish")
            .get()
            .then(querySnapshot => {
                const fishie = querySnapshot.docs.map(doc => doc.data());
                console.log(fishie);
                this.setState({ fish: fishie });
            });
            db.collection("Nuts")
            .get()
            .then(querySnapshot => {
                const nut = querySnapshot.docs.map(doc => doc.data());
                console.log(nut);
                this.setState({ nuts: nut });
            });
            db.collection("dairySoy")
            .get()
            .then(querySnapshot => {
                const ds = querySnapshot.docs.map(doc => doc.data());
                console.log(ds);
                this.setState({ dairySoy: ds });
            });
    }
    render() {
        return (
            <div>
                <p>This is the veggie page</p>
                <Link to={Constants.ROUTE_SUMMARY}>
                    <button>Click here to continue to summary page...</button>
                </Link>

                {testData.map((item, idx) => (
                <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed}>
                </ProgressBar>
                ))}
            </div>
        )
    }
}

export default VegSelect;