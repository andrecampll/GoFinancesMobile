import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

import Dashboard from './pages/Dashboard';
import CreateTransaction from './pages/CreateTransaction';
import Settings from './pages/Settings';

const Tab = createMaterialBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <Tab.Navigator
      activeColor="#ff872c"
      inactiveColor="#000"
      barStyle={{backgroundColor: '#fff'}}>
      <Tab.Screen
        name="Listagem"
        component={Dashboard}
        options={{
          tabBarIcon: (props: {focused: false; color: '#ff872c'}) => (
            <Icon name="format-list-bulleted" size={20} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cadastrar"
        component={CreateTransaction}
        options={{
          tabBarIcon: (props: {focused: true; color: '#000'}) => (
            <Feather name="dollar-sign" size={20} color={props.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Opções"
        component={Settings}
        options={{
          tabBarIcon: (props: {focused: true; color: '#000'}) => (
            <Feather name="settings" size={20} color={props.color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Routes;
