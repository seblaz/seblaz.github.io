import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Switch from 'react-switch';
import {Brightness3, WbSunny} from '@material-ui/icons';
import {useTheme} from '@material-ui/styles';
import Color from 'color';
import ThemeModeContext from 'contexts/ThemeModeContext';

const useStyles = makeStyles(theme => ({
  icon: {
    padding: 4,
    width: '100%',
    height: '100%',
    color: 'yellow',
  },
  wrapper: {
    display: 'flex',
    margin: theme.spacing(1)
  }
}));

export default ({...other}) => {
  const theme = useTheme();
  const classes = useStyles();
  const {themeMode, toggleThemeMode} = useContext(ThemeModeContext);

  return (
    <div {...other}>
      <div className={classes.wrapper}>
        <Switch
          height={35}
          width={65}
          onColor={Color(theme.palette.primary.dark).hex()}
          offColor={Color(theme.palette.primary.light).hex()}
          activeBoxShadow={`${theme.palette.primary.main} 0 0 4px 3px`}
          uncheckedIcon={<WbSunny className={classes.icon}/>}
          checkedIcon={<Brightness3 className={classes.icon}/>}
          checked={themeMode === 'dark'}
          onChange={toggleThemeMode}
        />
      </div>
    </div>
  );
}
