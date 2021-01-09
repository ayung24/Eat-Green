import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import * as Constants from '../../Constants/Constants';

class Summary extends Component{
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