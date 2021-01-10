import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';


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

function MeatCardHooksWrapper(Component){
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
    this.setState({ count: this.state.count + 1 });
  }
  DecreaseItem = () => {
    this.setState({ count: (this.state.count > 0) ? (this.state.count - 1) : 0 });
  }
  /* <form className={this.props.classes.root} noValidate autoComplete="off">
<TextField id="outlined-basic" label= "0" variant="outlined"/>
</form>
<text>{Counter.count}</text>
<IconButton aria-label="share">
<AddBoxIcon onClick={Counter.incCount} />
</IconButton>
<IconButton aria-label="add to favorites">
<IndeterminateCheckBoxIcon onClick={Counter.decCount} />
</IconButton> 
        <h2>{ this.state.count }</h2>
        <button onClick={this.IncrementItem}>+</button>
        <button onClick={this.DecreaseItem}>-</button>*/


  render() {
    return (
      <CardActions disableSpacing>
        <form className={this.props.classes} noValidate autoComplete="off">
          <TextField id="outlined-basic" value={this.state.count} variant="outlined" />
        </form>
        <IconButton aria-label="share">
          <AddBoxIcon onClick={this.IncrementItem} />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <IndeterminateCheckBoxIcon onClick={this.DecreaseItem} />
        </IconButton>
      </CardActions>
    );
  }
}

export default MeatCardHooksWrapper(Counter);
