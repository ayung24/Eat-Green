import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { db } from "../../firebase";
import * as Constants from '../../Constants/Constants';
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import VegCard from "../../Components/Cards/VegCard";
import FishCard from "../../Components/Cards/FishCard";
import NutCard from "../../Components/Cards/NutCard";
import SoyCard from "../../Components/Cards/SoyCard";

class VegSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            veg: [],
            fish: [],
            nuts: [],
            dairySoy: [],
            completed: 0
        };
    }

    componentDidMount() {
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

    addFishProtein() {
        let fishCount = 0;
        var fishProteinVals = [];
        this.state.fish.forEach(function(key) {
          var fishProtein = Object.values(key)[0];
          fishProteinVals.push(fishProtein);
        });
        if(localStorage.getItem("Salmon") > 0) {
            fishCount = localStorage.getItem("Salmon")*fishProteinVals[0];
        }
        this.setState({completed: this.state.completed + fishCount});

    }

    addVegProtein() {
        let vegCount = 0;
        var vegProteinVals = [];
        this.state.veg.forEach(function(key) {
          var vegProtein = Object.values(key)[0];
          vegProteinVals.push(vegProtein);
        });
        if(localStorage.getItem("Carrot") > 0) {
            vegCount = localStorage.getItem("Carrot")*vegProteinVals[0];
        }
        this.setState({completed: this.state.completed + vegCount});
    }

    // addNutProtein() {
    //     let nutCount = 0;
    //     var nutProteinVals = [];
    //     this.state.nut.forEach(function(key) {
    //       var nutProtein = Object.values(key)[0];
    //       nutProteinVals.push(nutProtein);
    //     });
    //     if(localStorage.getItem("Spinach") > 0) {
    //         nutCount = localStorage.getItem("Spinach")*nutProteinVals[0];
    //     }
    // }

    // addDSProtein() {
    //     let dsCount = 0;
    //     var dsProteinVals = [];
    //     this.state.dairySoy.forEach(function(key) {
    //       var dsProtein = Object.values(key)[0];
    //       dsProteinVals.push(dsProtein);
    //     });
    //     if(localStorage.getItem("Spinach") > 0) {
    //         dsCount = localStorage.getItem("Spinach")*dsProteinVals[0];
    //     }
    // }

    render() {
        var testData = [
            { bgcolor: "#00695c", completed: this.state.completed }
        ]

        var vegCards = [];
        this.state.veg.forEach(function (key) {
            var vegName = Object.keys(key)[0];
            var vegProtein = Object.values(key)[0];
            vegCards.push(<VegCard key={"veg-" + vegName} name={vegName} protein={vegProtein} cardType={Constants.CARD_VEGGIE}/>);
        });

        var fishCards = [];
        this.state.fish.forEach(function (key) {
            var fishName = Object.keys(key)[0];
            var fishProtein = Object.values(key)[0];
            fishCards.push(<FishCard key={"fish-" + fishName} name={fishName} protein={fishProtein} cardType={Constants.CARD_VEGGIE}/>);
        });

        var nutCards = [];
        this.state.nuts.forEach(function (key) {
            var nutName = Object.keys(key)[0];
            var nutProtein = Object.values(key)[0];
            nutCards.push(<NutCard key={"nut-"+ nutName} name={nutName} protein={nutProtein} cardType={Constants.CARD_VEGGIE}/>);
        });

        var dairySoyCards = [];
        this.state.dairySoy.forEach(function (key) {
            var soyName = Object.keys(key)[0];
            var soyProtein = Object.values(key)[0];
            dairySoyCards.push(<SoyCard key={"soy-" + soyName} name={soyName} protein={soyProtein} cardType={Constants.CARD_VEGGIE}/>);
        });

        return (
            <div>
                <div>
                    <div>
                        <p>
                        MEAT PROTEIN: {localStorage.getItem(Constants.LOCAL_STORAGE_MEAT_TOTAL) ? localStorage.getItem(Constants.LOCAL_STORAGE_MEAT_TOTAL) : 0} g
                        </p>
                        <p>
                        VEGGIE PROTEIN: {localStorage.getItem(Constants.LOCAL_STORAGE_VEGGIE_TOTAL) ? localStorage.getItem(Constants.LOCAL_STORAGE_MEAT_TOTAL) : 0} g
                        </p>
                    </div>
                </div>
                {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed}>
                        </ProgressBar>
                    ))}
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