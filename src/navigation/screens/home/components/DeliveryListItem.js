// @flow

import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';
import styled from 'styled-components/native';
import { Text } from 'native-base';
import { withNavigation } from 'react-navigation';
import { getDatefromTimestamp } from '../../../../utils';
import type { DeliveryListItem_delivery as Delivery } from './__generated__/DeliveryListItem_delivery.graphql';

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

type Props = {
  navigation: any,
  delivery: Delivery,
};

function DeliveryListItemTemplate({ navigation, delivery }: Props) {
  return (
    <Root
      onPress={() => {
        navigation.navigate('DeliveryDetails', {
          delivery,
        });
      }}
    >
      <CountriesContainer>
        <Text>
          🛫:
          {delivery.locationFrom}
        </Text>
        <Text>
          🛬:
          {delivery.locationTo}
        </Text>
      </CountriesContainer>
      <CountriesContainer>
        <Text>
          📅:
          {getDatefromTimestamp(delivery.deliverBy)}
        </Text>
        <Text>
          📦:
          {delivery.item}
        </Text>
      </CountriesContainer>
    </Root>
  );
}

const DeliveryListItem = withNavigation(DeliveryListItemTemplate);

export default createFragmentContainer(withNavigation(DeliveryListItem), {
  delivery: graphql`
    fragment DeliveryListItem_delivery on Delivery {
      id
      item
      imageURL
      locationFrom
      locationTo
      deliverBy
    }
  `,
});
