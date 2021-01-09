import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import * as Constants from '../../Constants/Constants';

class Home extends Component{
    render(){
        return(
            <div>
                <p>This is the home page</p>
                <Link to={Constants.ROUTE_MEAT_SELECT}>
                    <button>Click here to continue to meat selection...</button>
                </Link>
            </div>
        )
    }
}

export default Home;