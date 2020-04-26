import React from 'react';
import {ReactComponent as SB} from 'assets/img/originals/SB.svg'
import {makeStyles} from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  link: {
    textAlign: 'center',
    textDecoration: 'none',
    outline: 0
  },
  logoWrapper: {
    display: ({showName}) => showName ? 'block' : 'flex'
  },
  logo: {
    width: 'auto',
    height: ({height}) => height,
    margin: ({showName}) => showName ? 0 : theme.spacing(1.5),
    '--SB-primary': theme.palette.primary.lighter(90),
    '--SB-secondary': theme.palette.primary.lighter(70)
  },
  name: {
    color: 'white'
  }
}));

export default ({height = 60, showName = false}) => {
  const classes = useStyles({showName: showName, height: height});

  return (
    <Link to='/' className={classes.link}>
      <div className={classes.logoWrapper}>
        <SB className={classes.logo}/>
      </div>
      {showName && <Typography variant='h5' className={classes.name}>Seblaz</Typography>}
    </Link>
  )
}
