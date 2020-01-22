import React from 'react';
import {makeStyles} from '@material-ui/styles';
import Tabs from 'components/Tabs';

const useStyles = makeStyles(theme => ({
  tabItem: {
    textTransform: 'none',
    fontSize: 20,
    fontWeight: 600,
    color: 'white',
    maxWidth: 'none'
  },
  indicator: {
    left: 0
  },
  tabWrapper: {
    alignItems: 'flex-start',
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(2),
    }
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <Tabs tabsProps={{orientation: 'vertical', classes: {indicator: classes.indicator}}}
          tabProps={{className: classes.tabItem}}/>
  );
}