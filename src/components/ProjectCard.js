import React, {Fragment, useState} from 'react';
import Card from '@material-ui/core/Card';
import {makeStyles} from '@material-ui/styles';
import {useSpring, animated, config} from 'react-spring'
import ProjectCardContent from 'components/ProjectCardContent';

const useStyles = makeStyles(theme => ({
  placeholder: {
    opacity: 0
  },
  animated: {
    position: 'absolute',
    paddingRight: 'inherit',
    zIndex: ({cardFocused}) => cardFocused ? 100 : 0
  },
  card: {
    transition: 'box-shadow 0.8s',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 2px 0px',
    '&:hover': {
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 16px 32px 0px'
    }
  }
}));

export default ({imgSource, ...other}) => {
  const [cardFocused, setCardFocused] = useState(false);

  const focusCard = () => {
    setCardFocused(true);
  };

  const unFocusCard = () => {
    setCardFocused(false);
  };

  const [{transform}, setTransform] = useSpring(() => ({
    transform: 'scale(1.001)',
    config: config.gentle
  }));

  setTransform({
    transform: `scale(${cardFocused ? 1.2 : 1.001})`
  });

  const classes = useStyles({cardFocused: cardFocused});

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
          transform: transform
        }}
      >
        <Card
          onMouseEnter={focusCard}
          onMouseLeave={unFocusCard}
          className={classes.card}
        >
          <ProjectCardContent
            cardFocused={cardFocused} imgSource={imgSource} {...other}/>
        </Card>
      </animated.div>
    </Fragment>
  )
}
