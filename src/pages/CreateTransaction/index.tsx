import React, {useCallback, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TextInput, Alert} from 'react-native';
import api from '../../services/api';

import Feather from 'react-native-vector-icons/Feather';

import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  UpperContainer,
  AreaInfo,
  ActionArea,
  Action,
  ActionText,
} from './styles';

interface SignInFormData {
  category: string;
  title: string;
  value: number;
}

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const valueInputRef = useRef<TextInput>(null);
  const [selected, setSelected] = useState<Boolean>(false);
  const navigation = useNavigation();

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        let type;

        if (!selected) {
          type = 'outcome';
        } else {
          type = 'income';
        }

        const finalData = {...data, type};
        console.log(finalData);

        await api.post('/transactions', finalData);

        Alert.alert(
          'Transação cadastrada com sucesso!',
          'Você já pode ver a nova transação na Listagem.',
        );

        navigation.navigate('Listagem');
      } catch (err) {
        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao fazer o cadastro, tente novamente.',
        );
      }
    },
    [selected, navigation],
  );

  const handleSelectType = useCallback(() => {
    if (selected) {
      setSelected(false);
    } else {
      setSelected(true);
    }

    console.log(selected);
  }, [selected]);

  return (
    <>
      <UpperContainer>
        <Header />
      </UpperContainer>
      <Container>
        <AreaInfo>Cadastro</AreaInfo>

        <Form ref={formRef} onSubmit={handleSignIn}>
          <Input
            autoCapitalize="words"
            autoCorrect={false}
            name="title"
            placeholder="Nome"
            returnKeyType="next"
            onSubmitEditing={() => {
              valueInputRef.current?.focus();
            }}
          />

          <Input
            ref={valueInputRef}
            autoCorrect={false}
            name="value"
            placeholder="Valor"
            keyboardType="number-pad"
            returnKeyType="next"
          />

          <ActionArea>
            <Action selected={!!selected} onPress={handleSelectType}>
              <Feather name="arrow-up-circle" size={20} color="#12A454" />
              <ActionText>Income</ActionText>
            </Action>

            <Action selected={!selected} onPress={handleSelectType}>
              <Feather name="arrow-down-circle" size={20} color="#f22" />
              <ActionText>Outcome</ActionText>
            </Action>
          </ActionArea>

          <Input
            name="category"
            placeholder="Categoria"
            returnKeyType="send"
            onSubmitEditing={() => {
              formRef.current?.submitForm();
            }}
          />

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
