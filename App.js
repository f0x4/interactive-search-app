import React, {useEffect, useState} from 'react';
import {useColorScheme, StatusBar, SafeAreaView} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {getTheme, getThemeSettingsAsync} from './src/redux/slices/themeSlice';
import {store} from './src/redux/store';
import SearchScreen from './src/screens/SearchScreen';
import {DarkTheme, LightTheme} from './src/theme/Theme';

const ThemeWrapper = props => {
  const deviceScheme = useColorScheme();
  const theme = useSelector(getTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getThemeSettingsAsync());
  }, []);

  const deviceTheme = () => (deviceScheme === 'dark' ? DarkTheme : LightTheme);
  const selectedTheme = () => (theme === 'dark' ? DarkTheme : LightTheme);

  const deviceBarStyle = () =>
    deviceScheme === 'dark' ? 'light-content' : 'dark-content';
  const selectedBarStyle = () =>
    theme === 'dark' ? 'dark-content' : 'light-content';

  return (
    <ThemeProvider theme={theme === 'device' ? deviceTheme() : selectedTheme()}>
      <StatusBar
        barStyle={theme === 'device' ? deviceBarStyle() : selectedBarStyle()}
        translucent={true}
        backgroundColor="transparent"
      />
      {props.children}
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <ThemeWrapper>
        <SearchScreen />
      </ThemeWrapper>
    </Provider>
  );
};

export default App;
