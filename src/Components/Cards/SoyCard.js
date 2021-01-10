import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { green, red, yellow } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import TextField from '@material-ui/core/TextField'
import Counter from "../Counter";

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
    backgroundColor: yellow[700],
  },
}));

function MeatCardHooksWrapper(Component){
  return function WrappedComponent(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    return <Component {...props} classes={classes} expanded={expanded}/>
  }
}

class SoyCard extends Component {
  render() {
    const protein = "Protein: " + String(this.props.protein) + " g";

    return (
      <Card className={this.props.classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="SoyCard" className={this.props.classes.avatar}>
              B
            </Avatar>
          }
          title= {this.props.name}
          subheader= {protein}
        />
        <CardMedia
          className={this.props.classes.media}
          src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FhJJmhT_transparent-background-burritos-png-png-download%2F&psig=AOvVaw24u-iKYuv5ll0k5Qj5ziU-&ust=1610323747560000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjDr8qJkO4CFQAAAAAdAAAAABAD"}
          title="Burrito"
        />

      <Counter {... this.props}/>
        <Collapse in={this.props.expanded} timeout="auto" unmountOnExit>
          <CardContent>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default MeatCardHooksWrapper(SoyCard);