import styled from 'styled-components/native';

interface ActionProps {
  selected: boolean;
}

export const Container = styled.View`
  background: transparent;
  padding: 0px 25px;
  height: 100%;
  padding-bottom: 90%;
`;

export const UpperContainer = styled.View`
  background: #5636d3;
  height: 80px;
  padding: 0 0 0 25px;
  margin-bottom: 20px;
`;

export const AreaInfo = styled.Text`
  font-size: 20px;
  padding-bottom: 20px;
`;

export const ActionArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  width: 100%;
`;
export const Action = styled.TouchableOpacity<ActionProps>`
  border: 1.5px solid ${(props) => (props.selected ? '#ff872c' : '#ccc')};
  border-radius: 5px;
  width: 150px;
  height: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ActionText = styled.Text`
  font-size: 14px;
  color: #363f5f;
  margin-left: 5px;
`;
