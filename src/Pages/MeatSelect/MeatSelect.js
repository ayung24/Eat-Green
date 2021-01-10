import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Counter  from '../../Components/Counter';
import { db } from "../../firebase";

import * as Constants from '../../Constants/Constants';

class MeatSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            meatDishes: []
        };
    }

    componentDidMount() {
        db.collection("Meat")
            .get()
            .then(querySnapshot => {
                const data = querySnapshot.docs.map(doc => doc.data());
                console.log(data);
                this.setState({ meatDishes: data });
            });
    }

    render() {
        return (
            <div>
                <div>
              <Counter/>
              <Counter/>
                </div>
                <p>This is the meat select page</p>
                <Link to={Constants.ROUTE_VEG_SELECT}>
                    <button>Click here to continue to veggie selection...</button>
                </Link>
            </div>
        )
    }
}

export default MeatSelect;