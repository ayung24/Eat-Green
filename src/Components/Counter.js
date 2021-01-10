import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';

import * as Constants from "../Constants/Constants";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function CounterHooksWrapper(Component){
  return function WrappedComponent(props) {
    const classes = useStyles();
    const [expanded] = React.useState(false);
    return <Component {...props} classes={classes} expanded={expanded}/>
  }
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  IncrementItem = () => {
    const newCount = this.state.count + 1;
    this.setState({ count: newCount });
    localStorage.setItem(this.props.name, newCount);
    if(this.props.cardType === Constants.CARD_VEGGIE){
      var currentVeggie = localStorage.getItem(Constants.LOCAL_STORAGE_VEGGIE_TOTAL);
      if(currentVeggie){
        localStorage.setItem(
          Constants.LOCAL_STORAGE_VEGGIE_TOTAL,
          Number(currentVeggie) + (this.props.protein)
        );
      }else{
        localStorage.setItem(Constants.LOCAL_STORAGE_VEGGIE_TOTAL, this.props.protein);
      }
    }
  }

  DecreaseItem = () => {
    const newCount = (this.state.count > 0) ? (this.state.count - 1) : 0;
    this.setState({ count: newCount });
    localStorage.setItem(this.props.name, newCount);
    if(this.props.cardType === Constants.CARD_VEGGIE){
      var currentVeggie = localStorage.getItem(Constants.LOCAL_STORAGE_VEGGIE_TOTAL);
      if(currentVeggie){
        localStorage.setItem(
          Constants.LOCAL_STORAGE_VEGGIE_TOTAL,
          ((Number(currentVeggie) - (this.props.protein)) > 0) ?
          Number(currentVeggie) - (this.props.protein)   :
          0
        );
      }else{
        localStorage.setItem(Constants.LOCAL_STORAGE_VEGGIE_TOTAL, 0);
      }
    }
  }

  render() {
    return (
      <CardActions disableSpacing>
        <form className={this.props.classes} noValidate autoComplete="off">
          <TextField id="outlined-basic" value={this.state.count} variant="outlined" />
        </form>
        <IconButton aria-label="share" onClick={this.IncrementItem}>
          <AddBoxIcon/>
        </IconButton>
        <IconButton aria-label="add to favorites" onClick={this.DecreaseItem}>
          <IndeterminateCheckBoxIcon />
        </IconButton>
        {this.StoreToGlobal}
      </CardActions>
    );
  }
}

export default CounterHooksWrapper(Counter);