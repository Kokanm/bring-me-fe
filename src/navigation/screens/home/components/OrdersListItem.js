import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'native-base';

const Root = styled.View`
  height: 80px;
  justify-content: center;
`;

export default function OrderListItem({ title, id }) {
  return (
    <Root key={id}>
      <Text>{`List Item ${title}`}</Text>
    </Root>
  );
}
