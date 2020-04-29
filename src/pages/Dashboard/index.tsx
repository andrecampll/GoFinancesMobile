import React from 'react';

import Feather from 'react-native-vector-icons/Feather';

import Header from '../../components/Header';

import {
  Container,
  UpperContainer,
  Card,
  Content,
  CardTitle,
  CardValue,
  BalanceDate,
  BalanceInfo,
  AreaInfo,
  TransactionCard,
  TransactionTitle,
  TransactionValue,
  TransactionCategory,
  TransactionDate,
  CategoryArea,
  TransactionsList,
  BalanceList,
  BalanceDateTotal,
  CardTitleTotal,
  CardTotal,
  CardValueTotal,
} from './styles';

const Dashboard: React.FC = () => {
  const array = [1];

  return (
    <>
      <UpperContainer>
        <Header />

        <BalanceList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={array}
          keyExtractor={(array) => array}
          renderItem={() => (
            <>
              <Card>
                <Content>
                  <CardTitle>Entradas</CardTitle>

                  <BalanceInfo>
                    <CardValue>R$ 17.400,00</CardValue>
                    <BalanceDate>Última entrada: dia 13 de abril</BalanceDate>
                  </BalanceInfo>
                </Content>

                <Feather name="arrow-up-circle" size={40} color="#12A454" />
              </Card>
              <Card>
                <Content>
                  <CardTitle>Saídas</CardTitle>

                  <BalanceInfo>
                    <CardValue>R$ 1.400,00</CardValue>
                    <BalanceDate>Última saída: dia 10 de abril</BalanceDate>
                  </BalanceInfo>
                </Content>

                <Feather name="arrow-down-circle" size={40} color="#f22" />
              </Card>
              <CardTotal>
                <Content>
                  <CardTitleTotal>Total</CardTitleTotal>

                  <BalanceInfo>
                    <CardValueTotal>R$ 100.400,00</CardValueTotal>
                    <BalanceDateTotal>01 a 13 de abril</BalanceDateTotal>
                  </BalanceInfo>
                </Content>

                <Feather name="dollar-sign" size={40} color="#fff" />
              </CardTotal>
            </>
          )}
        />
      </UpperContainer>
      <Container>
        <AreaInfo>Listagem</AreaInfo>

        <TransactionsList
          data={array}
          showsVerticalScrollIndicator={false}
          renderItem={() => (
            <TransactionCard>
              <TransactionTitle>Desenvolvimento de site</TransactionTitle>
              <TransactionValue>R$ 12.000,00</TransactionValue>

              <CategoryArea>
                <Feather name="dollar-sign" size={20} color="#969cb3" />
                <TransactionCategory>Venda</TransactionCategory>
                <TransactionDate>10/04/2020</TransactionDate>
              </CategoryArea>
            </TransactionCard>
          )}
        />
      </Container>
    </>
  );
};

export default Dashboard;
