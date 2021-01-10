import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import { purple } from '@material-ui/core/colors';
import Counter from "../Counter";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
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
    backgroundColor: purple[500],
  },
}));

function NutCardHooksWrapper(Component){
  return function WrappedComponent(props) {
    const classes = useStyles();
    const [expanded] = React.useState(false);
    return <Component {...props} classes={classes} expanded={expanded}/>
  }
}

class NutCard extends Component {
  render() {
    const cardName = this.props.name;
    const protein = "Protein: " + String(this.props.protein) + " g";

    return (
      <Card className={this.props.classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="NutCard" className={this.props.classes.avatar}>
              B
            </Avatar>
          }
          title= {this.props.name}
          subheader= {protein}
        />
        <CardMedia
          className={this.props.classes.media}
          image={this.props.image}
          title={cardName}
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

export default NutCardHooksWrapper(NutCard);