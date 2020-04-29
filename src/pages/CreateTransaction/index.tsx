import React from 'react';

import Feather from 'react-native-vector-icons/Feather';

import Header from '../../components/Header';

import {
  Container,
  UpperContainer,
  AreaInfo,
  TextInput,
  ActionArea,
  Action,
  ActionText,
  Button,
  ButtonText,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <UpperContainer>
        <Header />
      </UpperContainer>
      <Container>
        <AreaInfo>Cadastro</AreaInfo>

        <TextInput placeholder="Nome" />

        <TextInput placeholder="Valor" />

        <ActionArea>
          <Action>
            <Feather name="arrow-up-circle" size={20} color="#12A454" />
            <ActionText>Income</ActionText>
          </Action>

          <Action>
            <Feather name="arrow-down-circle" size={20} color="#f22" />
            <ActionText>Outcome</ActionText>
          </Action>
        </ActionArea>

        <TextInput placeholder="Categoria" />

        <Button>
          <ButtonText>Enviar</ButtonText>
        </Button>
      </Container>
    </>
  );
};

export default Dashboard;
