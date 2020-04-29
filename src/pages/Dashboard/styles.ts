import styled from 'styled-components/native';
import {FlatList} from 'react-native-gesture-handler';

export const Container = styled.View`
  background: transparent;
  padding: 0px 25px;
  height: 100%;
  padding-bottom: 90%;
`;

export const UpperContainer = styled.View`
  background: #5636d3;
  height: 45%;
  padding: 0 0 0 25px;
  margin-bottom: 20%;
`;

export const Card = styled.View`
  background: #ffff;
  border-radius: 5px;
  width: 310px;
  height: 200px;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  padding: 19px 23px 50px;
  margin-right: 5px;
  margin-bottom: 10px;
`;

export const BalanceInfo = styled.View``;

export const Content = styled.View`
  justify-content: space-between;
`;
export const CardTitle = styled.Text`
  font-size: 16px;
  color: #363f5f;
`;
export const CardValue = styled.Text`
  font-size: 30px;
  color: #363f5f;
`;
export const BalanceDate = styled.Text`
  font-size: 12px;
  color: #969cb3;
`;

export const CardTotal = styled.View`
  background: #ff872c;
  border-radius: 5px;
  width: 310px;
  height: 200px;
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  padding: 19px 23px 50px;
  margin-right: 5px;
  margin-bottom: 10px;
`;

export const CardTitleTotal = styled.Text`
  font-size: 16px;
  color: #fff;
`;
export const CardValueTotal = styled.Text`
  font-size: 30px;
  color: #fff;
`;
export const BalanceDateTotal = styled.Text`
  font-size: 12px;
  color: #fff;
`;

export const AreaInfo = styled.Text`
  font-size: 20px;
`;
export const TransactionCard = styled.View`
  background: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 18px 24px;
`;
export const TransactionTitle = styled.Text`
  font-size: 14px;
  color: #363f5f;
`;
export const TransactionValue = styled.Text`
  color: #12a454;
  font-size: 20px;
`;
export const TransactionCategory = styled.Text`
  margin-left: 17px;
  color: #969cb3;
`;
export const TransactionDate = styled.Text`
  margin-left: 40%;
  color: #969cb3;
`;
export const CategoryArea = styled.View`
  margin-top: 19px;
  flex-direction: row;
`;
export const TransactionsList = styled(FlatList)`
  margin-top: 10px;
  height: 50%;
  width: 100%;
`;

export const BalanceList = styled(FlatList)`
  position: relative;
  top: 15%;
  width: 94%;
  height: 100%;
  padding-right: 15px;
`;
