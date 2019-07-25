import React from 'react';
import styled from 'styled-components/native';
import FloatingActions from './components/FloatingActions';
import OrdersList from './components/OrdersList';

const Root = styled.View`
  flex: 1;
`;

export default function HomeScreen() {
  return (
    <Root>
      <OrdersList />
      <FloatingActions />
    </Root>
  );
}
