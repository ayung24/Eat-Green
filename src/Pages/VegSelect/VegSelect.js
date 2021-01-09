import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import * as Constants from '../../Constants/Constants';

class VegSelect extends Component{
    render(){
        return(
            <div>
                <p>This is the veggie page</p>
                <Link to={Constants.ROUTE_SUMMARY}>
                    <button>Click here to continue to summary page...</button>
                </Link>
            </div>
        )
    }
}

export default VegSelect;