import React from 'react';
import {Switch} from 'react-native';

import {OptionArea, OptionTitle} from './styles';

const ThemeSwitcher: React.FC = () => {
  return (
    <OptionArea>
      <OptionTitle>Tema Dark</OptionTitle>
      <Switch />
    </OptionArea>
  );
};

export default ThemeSwitcher;
