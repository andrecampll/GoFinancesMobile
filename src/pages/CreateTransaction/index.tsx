import React, {useCallback, useRef} from 'react';

import Feather from 'react-native-vector-icons/Feather';

import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import Header from '../../components/Header';
import TextInput from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  UpperContainer,
  AreaInfo,
  ActionArea,
  Action,
  ActionText,
} from './styles';

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSignIn = useCallback((data: object) => {
    console.log(data);
  }, []);

  return (
    <>
      <UpperContainer>
        <Header />
      </UpperContainer>
      <Container>
        <AreaInfo>Cadastro</AreaInfo>

        <Form ref={formRef} onSubmit={handleSignIn}>
          <TextInput name="name" placeholder="Nome" />

          <TextInput
            name="value"
            placeholder="Valor"
            keyboardType="number-pad"
          />

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

          <TextInput name="category" placeholder="Categoria" />

          <Button
            onPress={() => {
              formRef.current?.submitForm();
            }}
          />
        </Form>
      </Container>
    </>
  );
};

export default Dashboard;
