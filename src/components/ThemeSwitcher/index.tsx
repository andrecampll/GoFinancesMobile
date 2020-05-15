import React, {useContext} from 'react';
import {Switch} from 'react-native';
import {ThemeContext} from 'styled-components';
// import App from '../../App';

import {OptionArea, OptionTitle} from './styles';

interface Props {
  toggleTheme(): void;
}

const ThemeSwitcher: React.FC<Props> = ({toggleTheme}) => {
  const {colors, title} = useContext(ThemeContext);

  // const {} = useContext(Context);

  return (
    <OptionArea>
      <OptionTitle>Tema Dark</OptionTitle>
      <Switch
        onValueChange={() => toggleTheme()}
        value
        trackColor={{false: colors.terciary, true: colors.terciary}}
        thumbColor={title === 'light' ? '#EBEEF8' : '#444'}
      />
    </OptionArea>
  );
};

export default ThemeSwitcher;
