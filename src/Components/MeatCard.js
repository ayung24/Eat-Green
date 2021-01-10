import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import Counter from "./Counter";

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

class MeatCard extends Component {
  render() {
    const cardName = this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)
    const protein = "Protein: " + String(this.props.protein) + " g";

    return (
      <Card className={this.props.classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="MeatCard" className={this.props.classes.avatar}>
              {cardName.charAt(0)}
          </Avatar>
          }
          title= {cardName}
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

export default MeatCardHooksWrapper(MeatCard);