import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import * as Constants from '../../Constants/Constants';

class MeatSelect extends Component{
    render(){
        return(
            <div>
                <p>This is the meat select page</p>
                <Link to={Constants.ROUTE_VEG_SELECT}>
                    <button>Click here to continue to veggie selection...</button>
                </Link>
            </div>
        )
    }
}

export default MeatSelect;