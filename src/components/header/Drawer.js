import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {makeStyles} from '@material-ui/styles';
import ModeToggle from 'components/header/ThemeModeToggle';
import Logo from 'components/Logo';
import MobileTabs from 'components/header/MobileTabs';

const useStyles = makeStyles(theme => ({
  firstRow: {
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(2),
    }
  },
  themeModeToggle: {
    marginLeft: theme.spacing(1)
  }
}));

export default ({open, onClose, onOpen}) => {
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
  const classes = useStyles();

  return (
    <SwipeableDrawer
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      anchor='right'
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <div className={classes.firstRow}>
        <Logo/>
        <ModeToggle className={classes.themeModeToggle}/>
      </div>
      <MobileTabs/>
    </SwipeableDrawer>
  )
}
