import React from 'react';
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core';
import Routes from 'sections/Routes';

const useStyles = makeStyles(theme => ({
  wrapper: {
    margin: theme.spacing(2, 0)
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <Container fixed>
      <div className={classes.wrapper}>
        <Routes/>
      </div>
    </Container>
  )
}
