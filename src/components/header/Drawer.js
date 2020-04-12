import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {makeStyles} from '@material-ui/styles';
import ModeToggle from 'components/header/ThemeModeToggle';
import MobileTabs from 'components/header/MobileTabs';

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    background: theme.palette.primary.main
  },
  firstRow: {
    display: 'flex',
    justifyContent: 'center'
  },
  themeModeToggle: {
    marginTop: theme.spacing(4.5),
    marginBottom: theme.spacing(2.5)
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
      classes={{paper: classes.drawerPaper}}
    >
      <div className={classes.firstRow}>
        <ModeToggle className={classes.themeModeToggle}/>
      </div>
      <MobileTabs onTabClick={onClose}/>
    </SwipeableDrawer>
  )
}
