import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { db } from "../../firebase";
import * as Constants from '../../Constants/Constants';
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import VegCard from "../../Components/Cards/VegCard";
import FishCard from "../../Components/Cards/FishCard";
import NutCard from "../../Components/Cards/NutCard";
import SoyCard from "../../Components/Cards/SoyCard";
import Grid from '@material-ui/core/Grid';
import AlmondImg from "../../Assets/almonds.png";
import BrocolliImg from "../../Assets/brocolli.png";
import CarrotImg from "../../Assets/carrot.png";
import CashewImg from "../../Assets/cashew.png";
import CfImg from "../../Assets/cf.png";
import CodImg from "../../Assets/cod.png";
import EggplantImg from "../../Assets/eggplant.png";
import EggImg from "../../Assets/egg.png";
import GreenImg from "../../Assets/greenb.png";
import KaleImg from "../../Assets/kale.png";
import LettuceImg from "../../Assets/lettuce.png";
import PeanutImg from "../../Assets/peanut.png";
import PistachioImg from "../../Assets/pistachio.png";
import PotatoImg from "../../Assets/potato.png";
import SalmonImg from "../../Assets/salmon.png";
import SpinachImg from "../../Assets/spinach.png";
import TofuImg from "../../Assets/tofu.png";
import TomatoImg from "../../Assets/tomato.png";
import TunaImg from "../../Assets/tuna.png";
import WalnutsImg from "../../Assets/walnuts.png";
import { Typography } from '@material-ui/core';

class VegSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            veg: [],
            fish: [],
            nuts: [],
            dairySoy: [],
            completed: 0,
            vegImages: {},
            fishImages: {},
            nutsImages: {},
            dairyImages: {},
            totalVegProtein: 0
        };
        this.onVeggieChanged = this.onVeggieChanged.bind(this);
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

    onVeggieChanged(){
        var meatProtein = Number(localStorage.getItem(Constants.LOCAL_STORAGE_MEAT_TOTAL));
        var vegProtein = Number(localStorage.getItem(Constants.LOCAL_STORAGE_VEGGIE_TOTAL));
        
        var percentage = 100;
        if(meatProtein !== 0) percentage = ((vegProtein/meatProtein)*100).toFixed(2);
        else percentage = 0;
        
        this.setState({
            totalVegProtein: vegProtein,
            completed: percentage
        }) 
    }

    render() {
        var testData = [
            { bgcolor: "#00695c", completed: this.state.completed > 100 ? 100 : this.state.completed }
        ]
        var fishCards = [];
        var FImages = {
            Salmon: SalmonImg,
            Tuna: TunaImg,
            Cod: CodImg,
        };
        let that = this;
        this.state.fish.forEach(function (key) {
            var fishName = Object.keys(key)[0];
            var fishProtein = Object.values(key)[0];
            var fishImages = (FImages)[fishName];
            console.log(fishImages);
            fishCards.push(
                <Grid key={"fish-grid" + fishName} item>
                    <FishCard 
                        key={"fish-" + fishName} 
                        cardType={Constants.CARD_VEGGIE} 
                        name={fishName} 
                        image={fishImages} 
                        protein={fishProtein} 
                        action={that.onVeggieChanged}/>
                        </Grid>);
        });

        var vegCards = [];
        var vegImages = {
            Carrot: CarrotImg,
            Eggplant: EggplantImg,
            Kale: KaleImg,
            Cauliflower: CfImg,
            Tomato: TomatoImg,
            Lettuce: LettuceImg,
            Broccoli: BrocolliImg,
            Greenbeans: GreenImg,
            Spinach: SpinachImg,
            Potato: PotatoImg,
        }
        this.state.veg.forEach(function (key) {
            var vegName = Object.keys(key)[0];
            vegName = vegName.replace(/\s/g, '');
            var vegProtein = Object.values(key)[0];
            var vegSource = (vegImages)[vegName];
            vegCards.push(<Grid key={"veg-grid" + vegName} item><VegCard key={"veg-" + vegName} name={vegName} image={vegSource} protein={vegProtein} cardType={Constants.CARD_VEGGIE} action={that.onVeggieChanged}/></Grid>);
        });

        var nutCards = [];
        var nutImages = {
            Walnut: WalnutsImg,
            Cashew: CashewImg,
            Almond: AlmondImg,
            Pistachio: PistachioImg,
            Peanut: PeanutImg,
        };
        this.state.nuts.forEach(function (key) {
            var nutName = Object.keys(key)[0];
            var nutProtein = Object.values(key)[0];
            var nutSource = (nutImages)[nutName];
            nutCards.push(<Grid key={"nut-grid" + nutName} item><NutCard key={"nut-"+ nutName} image={nutSource} name={nutName} protein={nutProtein} cardType={Constants.CARD_VEGGIE} action={that.onVeggieChanged}/></Grid>);
        });

        var dairySoyCards = [];
        var soyImages = {
            Tofu: TofuImg,
            Egg: EggImg,
        };
        this.state.dairySoy.forEach(function (key) {
            var soyName = Object.keys(key)[0];
            var soyProtein = Object.values(key)[0];
            var soySource = (soyImages)[soyName];
            dairySoyCards.push(<Grid key={"soy-grid" + soyName} item><SoyCard key={"soy-" + soyName} image={soySource} name={soyName} protein={soyProtein} cardType={Constants.CARD_VEGGIE} action={that.onVeggieChanged}/></Grid>);
        });

        return (
            <div>
                <div>
                    <Grid container justify="center" key="veg-grid2">
                        <Typography variant="h2" component="h2" >
                        Pick the meat alternatives until you have reached the minimum target goal for protein!
                        </Typography>
                    </Grid>
                </div>
                <div>
                    <Grid justify="center" alignItems="center" key="veg-grid3" container spacing={2}>
                        {fishCards}
                    </Grid>


                    <Grid justify="center" alignItems="center" key="veg-grid4" container spacing={2}>
                        {vegCards}

                        {nutCards}

                        {dairySoyCards}
                    </Grid>
                    {testData.map((item, idx) => (
                        <ProgressBar key={idx} bgcolor={item.bgcolor} 
                            completed={!localStorage.getItem(Constants.LOCAL_STORAGE_MEAT_TOTAL) || 
                            localStorage.getItem(Constants.LOCAL_STORAGE_MEAT_TOTAL) == 0        ? 
                            100:item.completed}>
                        </ProgressBar>
                    ))}
                    <div>
                        <p>
                        MEAT PROTEIN: {localStorage.getItem(Constants.LOCAL_STORAGE_MEAT_TOTAL) ? localStorage.getItem(Constants.LOCAL_STORAGE_MEAT_TOTAL) : 0} g
                        </p>
                        <p>
                        VEGGIE PROTEIN: {this.state.totalVegProtein} g
                        </p>
                    </div>
                    <Link to={Constants.ROUTE_SUMMARY}>
                        <button variant="contained" color="secondary"> NEXT </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default VegSelect;