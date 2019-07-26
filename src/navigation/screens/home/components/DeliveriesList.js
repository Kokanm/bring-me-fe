import React from 'react';
import { FlatList } from 'react-native';
import { graphql, createRefetchContainer } from 'react-relay';
import { withNavigation } from 'react-navigation';
import styled from 'styled-components/native/dist/styled-components.native.esm';
import DeliveryListItem from './DeliveryListItem';
import type { DeliveriesList_deliveries as Deliveries } from './__generated__/DeliveriesList_deliveries.graphql';

type Props = {
  deliveries: Deliveries,
  navigation: any,
  relay: {
    refetch(): void,
  },
};

const Separator = styled.View`
  flex: 1;
  height: 1px;
  background-color: gray;
`;

function DeliveryList({ navigation, deliveries, relay }: Props) {
  if (!deliveries) {
    return null;
  }

  const data = deliveries?.deliveries || [];

  navigation.addListener('didFocus', () => {
    relay.refetch();
  });

  return (
    <FlatList
      data={data}
      renderItem={itemData => <DeliveryListItem delivery={itemData.item} />}
      ItemSeparatorComponent={() => <Separator />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

export default createRefetchContainer(
  withNavigation(DeliveryList),
  {
    deliveries: graphql`
      fragment DeliveriesList_deliveries on Query {
        deliveries {
          ...DeliveryListItem_delivery
        }
      }
    `,
  },
  graphql`
    query DeliveriesListRefetchQuery {
      deliveries {
        ...DeliveryListItem_delivery
      }
    }
  `,
);
