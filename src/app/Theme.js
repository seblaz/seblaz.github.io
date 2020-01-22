import React, {Fragment} from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import {useMediaQuery} from '@material-ui/core';
import {useCookies} from 'react-cookie';
import CssBaseline from '@material-ui/core/CssBaseline';
import Color from 'color';
import ThemeModeContext from 'contexts/ThemeModeContext';
import 'typeface-roboto';

export default ({children}) => {
  /**
   * Prepare ThemeModeContext;
   */
  const queryMode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
  const [cookies, setCookie] = useCookies();

  const themeMode = cookies['themeMode'] || queryMode;
  const themeContextValue = {
    themeMode: themeMode,
    toggleThemeMode: () => {
      setCookie('themeMode', themeMode === 'dark' ? 'light' : 'dark')
    }
  };

  /**
   * Customize theme.
   */
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: {
            main: '#47CC31',
            color: Color('#47CC31')
          },
          secondary: {
            main: '#B531CC',
            color: Color('#B531CC')
          },
          type: themeMode
        },
      }),
    [themeMode],
  );

  /**
   * Set components.
   */
  return (
    <Fragment>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
        <ThemeModeContext.Provider value={themeContextValue}>
          {children}
        </ThemeModeContext.Provider>
      </ThemeProvider>
    </Fragment>
  )
}