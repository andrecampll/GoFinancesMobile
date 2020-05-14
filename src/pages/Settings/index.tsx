import React from 'react';

import Header from '../../components/Header';
import ThemeSwitcher from '../../components/ThemeSwitcher';

import {UpperContainer, Container} from './styles';

const Settings: React.FC = () => {
  return (
    <>
      <UpperContainer>
        <Header />
      </UpperContainer>
      <Container>
        <ThemeSwitcher />
      </Container>
    </>
  );
};

export default Settings;
