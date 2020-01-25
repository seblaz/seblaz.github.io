import React, {Fragment} from 'react';
import {Typography} from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import {makeStyles} from '@material-ui/styles';
import GithubButton from 'components/GithubButton';

const useStyles = makeStyles(theme => ({
  media: {
    height: 140,
  },
  titleContainer: {
    position: 'relative',
    textAlign: 'center'
  },
  title: {
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  backgroundOverlay: {
    background: ({backgroundOpacity}) => theme.palette.color('black').alpha(0.35 + backgroundOpacity).rgb().string(),
    height: '100%'
  }
}));

export default ({title, imgSource, description, backgroundOpacity, cardFocused, ...other}) => {
  const classes = useStyles({backgroundOpacity: backgroundOpacity || 0});

  return (
    <Fragment>
      <CardActionArea>
        <div className={classes.titleContainer}>
          <CardMedia
            className={classes.media}
            image={imgSource}
            title={title}
          >
            <div className={classes.backgroundOverlay}/>
          </CardMedia>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
        </div>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {cardFocused &&
      <CardActions>
        <GithubButton {...other}/>
      </CardActions>}
    </Fragment>
  )
}
