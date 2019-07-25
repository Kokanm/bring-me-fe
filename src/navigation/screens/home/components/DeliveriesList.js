import React from 'react';
import { FlatList } from 'react-native';
import { graphql, createFragmentContainer } from 'react-relay';
import styled from 'styled-components/native/dist/styled-components.native.esm';
import DeliveryListItem from './DeliveryListItem';
import type { DeliveriesList_deliveries as Deliveries } from './__generated__/DeliveriesList_deliveries.graphql';

type Props = {
  deliveries: Deliveries,
};

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
      data={data}
      renderItem={itemData => <DeliveryListItem delivery={itemData.item} />}
      ItemSeparatorComponent={() => <Separator />}
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
