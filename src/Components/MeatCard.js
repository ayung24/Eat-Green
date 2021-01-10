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

class MeatCard extends Component {
  render() {
    // const handleExpandClick = () => {
    //   setExpanded(!expanded);
    // };

    return (
      <Card className={this.props.classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="MeatCard" className={this.props.classes.avatar}>
              B
          </Avatar>
          }
          title={this.props.name}
        />
        <CardMedia
          className={this.props.classes.media}
          src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FhJJmhT_transparent-background-burritos-png-png-download%2F&psig=AOvVaw24u-iKYuv5ll0k5Qj5ziU-&ust=1610323747560000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMjDr8qJkO4CFQAAAAAdAAAAABAD"}
          title="Burrito"
        />
        {/* <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent> */}

   <Counter/>
        <Collapse in={this.props.expanded} timeout="auto" unmountOnExit>
          <CardContent>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

export default MeatCardHooksWrapper(MeatCard);