import React from 'react';
import logo from '../../assets/Logo.png';

import {Container, Logo, Date} from './styles';

const Header: React.FC = () => (
  <Container>
    <Logo source={logo} />

    <Date>13 de abril</Date>
  </Container>
);

export default Header;
