import React from 'react';
import { FlatList } from 'react-native';
import { graphql, createFragmentContainer } from 'react-relay';
import OrdersListItem from './OrdersListItem';
import type { DeliveriesList_deliveries as Deliveries } from './__generated__/DeliveriesList_deliveries.graphql';

type Props = {
  deliveries: Deliveries,
};

function DeliveriesList(props: Props) {
  const { deliveries } = props;
  if (!deliveries) {
    return null;
  }

  const data = deliveries?.deliveries || [];
  return (
    <FlatList data={data} renderItem={({ item: { item } }) => <OrdersListItem title={item} />} />
  );
}

export default createFragmentContainer(DeliveriesList, {
  deliveries: graphql`
    fragment DeliveriesList_deliveries on Query {
      deliveries {
        id
        item
        imageURL
        locationFrom
      }
    }
  `,
});
