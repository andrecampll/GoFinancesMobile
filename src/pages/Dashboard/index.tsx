import React, {useEffect, useState} from 'react';

import Feather from 'react-native-vector-icons/Feather';

import api from '../../services/api';

import Header from '../../components/Header';

import formatValue from '../../utils/formatValue';
import formatDate from '../../utils/formatDate';

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
  Divider,
} from './styles';

interface Transaction {
  title: string;
  type: 'income' | 'outcome';
  value: number;
  formattedDate: string;
  formattedValue: string;
  category_id: string;
  category: {
    title: string;
  };
  id: string;
  created_at: string;
}

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

const Dashboard: React.FC = () => {
  const array = [1];
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);

  // const incomeTransactions = transactions.filter(
  //   (transaction) => transaction.type === 'income',
  // );

  // const lastIncomeDate =
  //   incomeTransactions[incomeTransactions.length - 1].formattedDate;

  // const outcomeTransactions = transactions.filter(
  //   (transaction) => transaction.type === 'outcome',
  // );

  // const lastOutcomeDate =
  //   outcomeTransactions[outcomeTransactions.length - 1].formattedDate;

  // console.log(lastIncomeDate, lastOutcomeDate);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      const response = await api.get('/transactions');

      const transactionsResponse: Transaction[] = response.data.transactions;

      transactionsResponse.map((transaction: Transaction) => {
        transaction.formattedDate = formatDate(transaction.created_at);
        transaction.formattedValue = formatValue(transaction.value);
      });

      const balanceResponse: Balance = response.data.balance;

      const data: Balance = {
        income: formatValue(balanceResponse.income),
        outcome: formatValue(balanceResponse.outcome),
        total: formatValue(balanceResponse.total),
      };

      setTransactions(transactionsResponse);
      setBalance(data);

      // console.log(outcomeTransactions);
    }

    loadTransactions();
  }, []);

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
                    <CardValue>{balance.income}</CardValue>
                    <BalanceDate>Última entrada: 30/04/2020</BalanceDate>
                  </BalanceInfo>
                </Content>

                <Feather name="arrow-up-circle" size={40} color="#12A454" />
              </Card>
              <Card>
                <Content>
                  <CardTitle>Saídas</CardTitle>

                  <BalanceInfo>
                    <CardValue>{balance.outcome} </CardValue>
                    <BalanceDate>Última saída: 30/04/2020</BalanceDate>
                  </BalanceInfo>
                </Content>

                <Feather name="arrow-down-circle" size={40} color="#f22" />
              </Card>
              <CardTotal>
                <Content>
                  <CardTitleTotal>Total</CardTitleTotal>

                  <BalanceInfo>
                    <CardValueTotal>{balance.total}</CardValueTotal>
                    <BalanceDateTotal>
                      {' '}
                      De 01/04/2020 a 30/04/2020{' '}
                    </BalanceDateTotal>
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
          data={transactions}
          keyExtractor={(transaction) => transaction.id}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TransactionCard>
              <TransactionTitle>{item.title}</TransactionTitle>
              <TransactionValue type={item.type}>
                {item.type === 'outcome' && '- '}
                {item.formattedValue}
              </TransactionValue>

              <CategoryArea>
                <Divider>
                  <Feather name="dollar-sign" size={20} color="#969cb3" />
                  <TransactionCategory>
                    {item.category.title}
                  </TransactionCategory>
                </Divider>
                <TransactionDate>{item.formattedDate}</TransactionDate>
              </CategoryArea>
            </TransactionCard>
          )}
        />
      </Container>
    </>
  );
};

export default Dashboard;
