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
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import TextField from '@material-ui/core/TextField'
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
    const [expanded, setExpanded] = React.useState(false);
    return <Component {...props} classes={classes} expanded={expanded}/>
  }
}

class MeatCard extends Component {
  render() {
    // const handleExpandClick = () => {
    //   setExpanded(!expanded);
    // };
    
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
          // src = meatImages[this.props.class.name]
          // changes depending how i import pictures
          image={this.props.image}
          title={cardName}
        />
        {/* <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent> */}

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