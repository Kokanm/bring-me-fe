import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'native-base';
import { withNavigation } from 'react-navigation';

const Root = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ItemImage = styled.Image`
  width: 300;
  height: 300;
`;

const AcceptDeliveryButton = styled.Button`
  align-self: center;
`;

function OrderDetails({ navigation }) {
  const delivery = navigation.getParam('delivery');

  return (
    <Root>
      <Text>{`${delivery.item}`}</Text>
      {delivery.imageURL ? (
        <ItemImage source={{ uri: delivery.imageURL }} resizeMode="contain" />
      ) : null}
      <Text>{`From: ${delivery.locationFrom}`}</Text>
      <Text>{`To: ${delivery.locationTo}`}</Text>
      <AcceptDeliveryButton title="Accept delivery" />
    </Root>
  );
}

export default withNavigation(OrderDetails);
