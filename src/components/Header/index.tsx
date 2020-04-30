import React from 'react';
import logo from '../../assets/Logo.png';

import {Container, Logo, Day} from './styles';

const Header: React.FC = () => {
  const date = new Date();

  var dia = date.getDate();
  var month = date.getMonth();

  let mes;

  switch (month) {
    case 0:
      mes = 'janeiro';
      break;

    case 1:
      mes = 'fevereiro';
      break;

    case 2:
      mes = 'março';
      break;

    case 3:
      mes = 'abril';
      break;
    case 4:
      mes = 'maio';
      break;

    case 5:
      mes = 'junho';
      break;

    case 6:
      mes = 'julho';
      break;

    case 7:
      mes = 'agosto';
      break;

    case 8:
      mes = 'setembro';
      break;

    case 9:
      mes = 'outubro';
      break;

    case 10:
      mes = 'novembro';
      break;

    case 11:
      mes = 'dezembro';
      break;

    default:
      break;
  }

  return (
    <Container>
      <Logo source={logo} />

      <Day>
        {dia} de {mes}
      </Day>
    </Container>
  );
};

export default Header;
