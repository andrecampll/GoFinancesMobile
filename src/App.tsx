import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <View style={{backgroundColor: '#312e38', flex: 1}}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" backgroundColor="#000" />
        <Routes />
      </NavigationContainer>
    </View>
  );
};

export default App;
