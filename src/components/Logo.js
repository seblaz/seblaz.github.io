import React from 'react';
import {ReactComponent as SB} from 'assets/img/SB.svg'
import {makeStyles} from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex'
  },
  logo: {
    minHeight: 50,
    width: 'auto',
    margin: theme.spacing(1.5),
    '--SB-primary': theme.palette.primary.color.lighten(0.9).hex(),
    '--SB-secondary': theme.palette.primary.color.lighten(0.7).hex(),
  },
  nameWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  name: {
    color: 'white',
    fontSize: 30,
    fontWeight: 500
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <SB className={classes.logo}/>
      <div className={classes.nameWrapper}>
        <Typography variant="h4" className={classes.name}>Seblaz</Typography>
      </div>
    </div>
  )
}
