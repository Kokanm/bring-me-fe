import React from 'react';
import { FlatList } from 'react-native';
import { graphql, createFragmentContainer } from 'react-relay';
import styled from 'styled-components/native';
import { Text } from 'native-base';
import DeliveryListItem from './DeliveryListItem';
import type { DeliveriesList_deliveries as Deliveries } from './__generated__/DeliveriesList_deliveries.graphql';

type Props = {
  deliveries: Deliveries,
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

function DeliveryList(props: Props) {
  const { deliveries } = props;
  if (!deliveries) {
    return null;
  }

  const data = deliveries?.deliveries || [];

  return (
    <FlatList
      style={{ flex: 1 }}
      contentContainerStyle={{ flex: 1 }}
      data={data}
      renderItem={itemData => <DeliveryListItem delivery={itemData.item} />}
      ItemSeparatorComponent={() => <Separator />}
      ListEmptyComponent={() => (
        <EmptyList>
          <Text>Nothing to show 😞</Text>
        </EmptyList>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

export default createFragmentContainer(DeliveryList, {
  deliveries: graphql`
    fragment DeliveriesList_deliveries on Query {
      deliveries {
        ...DeliveryListItem_delivery
      }
    }
  `,
});
