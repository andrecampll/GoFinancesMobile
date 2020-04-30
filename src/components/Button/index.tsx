import React from 'react';

import {Button, ButtonText} from './styles';
import {TouchableOpacityProps} from 'react-native';

const ButtonOpacity: React.FC<TouchableOpacityProps> = ({...rest}) => {
  return (
    <Button {...rest}>
      <ButtonText>Enviar</ButtonText>
    </Button>
  );
};

export default ButtonOpacity;
