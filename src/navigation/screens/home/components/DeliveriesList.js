import React from 'react';
import { FlatList } from 'react-native';
import { graphql, createRefetchContainer } from 'react-relay';
import styled from 'styled-components/native';
import { Tab, Tabs, Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import DeliveryListItem from './DeliveryListItem';
import type { DeliveriesList_deliveries as Deliveries } from './__generated__/DeliveriesList_deliveries.graphql';

type Props = {
  deliveries: Deliveries,
  navigation: any,
  relay: {
    refetch(): void,
  },
};

const EmptyList = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Separator = styled.View`
  flex: 1;
  height: 1px;
  background-color: gray;
`;

const TabContent = ({ data, type }) => {
  return (
    <FlatList
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      data={data}
      renderItem={itemData => <DeliveryListItem delivery={itemData.item} type={type} />}
      ListEmptyComponent={() => (
        <EmptyList>
          <Text>Nothing to show 😞</Text>
        </EmptyList>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

function DeliveryList({ navigation, deliveries, relay }: Props) {
  if (!deliveries) {
    return null;
  }

  const data = deliveries?.deliveries || [];

  navigation.addListener('didFocus', () => {
    relay.refetch();
  });

  return (
    <Tabs>
      <Tab heading="Orders">
        <TabContent data={data} type="Request" />
      </Tab>
      <Tab heading="Suggestions">
        <TabContent data={data} type="Offer" />
      </Tab>
    </Tabs>
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
