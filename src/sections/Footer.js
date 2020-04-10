import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {makeStyles} from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Logo from 'components/Logo';
import Typography from '@material-ui/core/Typography';
import SocialLinks from 'components/footer/SocialLinks';

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
  },
  copyright: {
    display: 'flex',
    justifyContent: 'center',
    color: theme.palette.primary.lighter(70)
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
          <Grid item xs={12} className={classes.copyright}>
            <Typography variant='h6'>Por Seblaz | Copyright © {new Date().getFullYear()}</Typography>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  )
}
