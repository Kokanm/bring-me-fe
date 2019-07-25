import React from 'react';
import { FlatList } from 'react-native';
import OrdersListItem from './OrdersListItem';

export default function OrdersList() {
  return (
    <FlatList
      data={[...Array(100)].map((_, index) => ({ key: `${index}`, title: index + 1 }))}
      renderItem={({ item: { title } }) => <OrdersListItem title={title} />}
    />
  );
}
