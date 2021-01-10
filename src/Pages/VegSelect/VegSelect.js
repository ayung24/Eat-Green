import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import {View} from 'react-native';
import ProgressBar from "../../Components/ProgressBar/ProgressBar";

import * as Constants from '../../Constants/Constants';
// import {arr} from '../MeatSelect';

const testData = [
    { bgcolor: "#00695c", completed: 50 }
  ];

class VegSelect extends Component{
    render(){
        return(
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