import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import Dashboard from './pages/Dashboard';
import CreateTransaction from './pages/CreateTransaction';

const Tab = createMaterialBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <Tab.Navigator barStyle={{backgroundColor: '#fff'}}>
      <Tab.Screen
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: (props: {focused: true; color: '#000'}) => (
            <Icon name="format-list-bulleted" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Cadastrar"
        component={CreateTransaction}
        options={{
          tabBarIcon: (props: {focused: true; color: '#000'}) => (
            <Feather name="dollar-sign" size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
