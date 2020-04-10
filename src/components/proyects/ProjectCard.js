import React, {Fragment, useState} from 'react';
import Card from '@material-ui/core/Card';
import {makeStyles, useTheme} from '@material-ui/styles';
import {useSpring, animated, config} from 'react-spring'
import ProjectCardContent from 'components/proyects/ProjectCardContent';
import {useMediaQuery} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  placeholder: {
    opacity: 0
  },
  animated: {
    position: 'absolute',
    marginRight: ({spacing}) => theme.spacing(spacing / 2)
  },
  card: {
    transition: 'box-shadow 0.8s',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 2px 0px',
    '&:hover': {
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 16px 32px 0px'
    }
  }
}));

export default ({imgSource, spacing, ...other}) => {
  const [cardFocused, setCardFocused] = useState(false);

  const focusCard = () => {
    setCardFocused(true);
  };

  const unFocusCard = () => {
    setCardFocused(false);
  };

  const [{transform, zIndex}, setAnimations] = useSpring(() => ({
    transform: 'scale(1.001)',
    zIndex: 0,
    config: config.gentle
  }));

  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down('xs'));

  setAnimations({
    transform: `scale(${cardFocused ? xs ? 1.05 : 1.2 : 1.001})`,
    zIndex: cardFocused ? 200 : 100
  });

  const classes = useStyles({spacing: spacing});

  return (
    <Fragment>
      {/* Placeholder to occupy the place when the animation occurs. */}
      <Card className={classes.placeholder}>
        <ProjectCardContent {...other}/>
      </Card>
      {/* Real card */}
      <animated.div
        className={classes.animated}
        style={{
          transform: transform,
          zIndex: zIndex.interpolate(zIndex => Math.round(zIndex))
        }}
      >
        <Card
          onMouseDown={focusCard}
          onMouseEnter={focusCard}
          onMouseLeave={unFocusCard}
          className={classes.card}
        >
          <ProjectCardContent cardFocused={cardFocused} imgSource={imgSource} {...other}/>
        </Card>
      </animated.div>
    </Fragment>
  )
}
