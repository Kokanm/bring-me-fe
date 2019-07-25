import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'native-base';
import { withNavigation } from 'react-navigation';

const Root = styled.TouchableOpacity`
  flex-direction: row;
  height: 80px;
  padding: 0 5px;
  justify-content: center;
  background-color: #fff;
  border-bottom-width: 1px;
  border-bottom-color: gray;
`;

const CountriesContainer = styled.View`
  flex: 1;
  justify-content: space-around;
`;

function OrderListItem({ navigation }) {
  return (
    <Root onPress={() => navigation.navigate('OrderDetails')}>
      <CountriesContainer>
        <Text>🛫: Barcelona 🇪🇸</Text>
        <Text>🛬: Paris 🇫🇷</Text>
      </CountriesContainer>
      <CountriesContainer>
        <Text>📅: 01-08-2019</Text>
        <Text>📦: Spanish wine</Text>
      </CountriesContainer>
    </Root>
  );
}

export default withNavigation(OrderListItem);
