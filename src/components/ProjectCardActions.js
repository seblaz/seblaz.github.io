import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import GithubButton from 'components/GithubButton';
import {useSpring, animated} from 'react-spring';

export default ({show, ...gitHubProps}) => {
  const maxHeight = 46;

  const [{height}, setHeight] = useSpring(() => ({
    height: 0
  }));

  setHeight({
    height: show ? maxHeight : 0
  });

  return (
    <animated.div style={{display: 'block', height: height}}>
      <CardActions>
        <GithubButton {...gitHubProps}/>
      </CardActions>
    </animated.div>
  )
}