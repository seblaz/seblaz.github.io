import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {makeStyles} from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Logo from 'components/common/Logo';
import SocialLinks from 'components/footer/SocialLinks';
import Notices from "components/footer/Notices";

const useStyles = makeStyles(theme => ({
  appBar: {
    marginTop: 'auto',
    zIndex: 0,
    paddingTop: theme.spacing(4),
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(3)
    },
  },
  container: {
    padding: theme.spacing(2, 2)
  },
  gridContainer: {
    padding: theme.spacing(0.5)
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar} component='footer'>
      <Container fixed className={classes.container}>
        <Grid container spacing={2} className={classes.gridContainer}>
          <Grid item xs={12} sm={3}>
            <Logo showName={true} height={100}/>
          </Grid>
          <Grid item xs={12} sm={9}>
            <SocialLinks/>
          </Grid>
          <Grid item xs={12}>
            <Notices/>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  )
}
