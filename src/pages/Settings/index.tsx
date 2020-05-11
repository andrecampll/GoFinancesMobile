import React from 'react';
import {Switch} from 'react-native';

import Header from '../../components/Header';

import {UpperContainer, Container, OptionArea, OptionTitle} from './styles';

const Settings: React.FC = () => {
  return (
    <>
      <UpperContainer>
        <Header />
      </UpperContainer>
      <Container>
        <OptionArea>
          <OptionTitle>Tema Dark</OptionTitle>
          <Switch />
        </OptionArea>
      </Container>
    </>
  );
};

export default Settings;
