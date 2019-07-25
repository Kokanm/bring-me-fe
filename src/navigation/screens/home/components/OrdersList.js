import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import OrdersListItem from './OrdersListItem';

const Separator = styled.View`
  flex: 1;
  height: 1px;
  background-color: gray;
`;

export default function OrdersList() {
  return (
    <FlatList
      data={[...Array(100)].map((_, index) => ({ key: `${index}`, title: index + 1 }))}
      renderItem={({ item: { title } }) => <OrdersListItem title={title} />}
      ItemSeparatorComponent={() => <Separator />}
    />
  );
}
