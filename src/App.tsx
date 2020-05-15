import 'react-native-gesture-handler';
import React, {useState, useCallback, createContext} from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

import Routes from './routes';

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title]);

  const Context = createContext(toggleTheme);

  return (
    <View style={{backgroundColor: '#000', flex: 1}}>
      <NavigationContainer>
        <ThemeProvider theme={light}>
          <StatusBar barStyle="dark-content" backgroundColor="#5636d3" />
          <Context.Provider value={toggleTheme}>
            <Routes />
          </Context.Provider>
        </ThemeProvider>
      </NavigationContainer>
    </View>
  );
};

export default App;
