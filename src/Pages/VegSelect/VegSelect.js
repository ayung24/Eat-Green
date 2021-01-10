import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { db } from "../../firebase";
import * as Constants from '../../Constants/Constants';
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import MeatSelect from '../MeatSelect/MeatSelect';
import VegCard from "../../Components/Cards/VegCard";
import FishCard from "../../Components/Cards/FishCard";
import NutCard from "../../Components/Cards/NutCard";
import SoyCard from "../../Components/Cards/SoyCard";

const itemCount = window.$itemCount;

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
        var vegCards = [];
        this.state.veg.forEach(function (key) {
            var vegName = Object.keys(key)[0];
            var vegProtein = Object.values(key)[0];
            vegCards.push(<VegCard name={vegName} protein={vegProtein} />);
        });

        var fishCards = [];
        this.state.fish.forEach(function (key) {
            var fishName = Object.keys(key)[0];
            var fishProtein = Object.values(key)[0];
            fishCards.push(<FishCard name={fishName} protein={fishProtein} />);
        });

        var nutCards = [];
        this.state.nuts.forEach(function (key) {
            var nutName = Object.keys(key)[0];
            var nutProtein = Object.values(key)[0];
            nutCards.push(<NutCard name={nutName} protein={nutProtein} />);
        });

        var dairySoyCards = [];
        this.state.dairySoy.forEach(function (key) {
            var soyName = Object.keys(key)[0];
            var soyProtein = Object.values(key)[0];
            dairySoyCards.push(<SoyCard name={soyName} protein={soyProtein} />);
        });

        console.log(this.state);
        return (
            <div>
                <div>
                    <div>{localStorage.getItem("sum")}</div>
                </div>
                <div>
                    <div>
                        {fishCards}
                    </div>
                    <div>
                        {vegCards}
                    </div>
                    <div>
                        {nutCards}
                    </div>
                    <div>
                        {dairySoyCards}
                    </div>
                    <p>This is the veggie page</p>
                    <Link to={Constants.ROUTE_SUMMARY}>
                        <button>Click here to continue to summary page...</button>
                    </Link>

                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed}>
                        </ProgressBar>
                    ))}
                </div>
            </div>

        )
    }
}

export default VegSelect;