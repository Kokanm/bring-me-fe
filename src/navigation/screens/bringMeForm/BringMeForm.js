// @flow

import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Form, Item, Input, Textarea, DatePicker } from 'native-base';
import { withNavigation, NavigationScreenProp } from 'react-navigation';
import { sanitizeUrl } from '@braintree/sanitize-url';
import { addDelivery } from '../../../relay/mutations/AddDelivery';
import type { DeliveryListItem_delivery as Delivery } from '../home/components/__generated__/DeliveryListItem_delivery.graphql';

const AddDeliveryButton = styled.Button`
  align-self: center;
`;

const saveDeliveryData = (delivery: Delivery, onSuccess: () => void): void => {
  addDelivery({
    ...delivery,
    type: 'Request',
  }).then(() => onSuccess());
};

function BringMeForm({ navigation }: NavigationScreenProp<{}>) {
  const [form, setFromValues] = useState({
    locationFrom: '',
    locationTo: '',
    deliverBy: '',
    item: '',
    imageURL: '',
    description: '',
  });

  return (
    <View>
      <View>
        <Form>
          <Item>
            <Input
              onChangeText={value => setFromValues({ ...form, locationFrom: value })}
              placeholder="From"
            />
          </Item>
          <Item>
            <Input
              onChangeText={value => setFromValues({ ...form, locationTo: value })}
              placeholder="To"
            />
          </Item>
          <Item>
            <DatePicker
              minimumDate={new Date(Date.now())}
              locale="en"
              modalTransparent
              animationType="slide"
              androidMode="default"
              placeHolderText="When"
              placeHolderTextStyle={{ color: '#5e5e5e' }}
              onDateChange={value => setFromValues({ ...form, deliverBy: value.getTime() })}
              disabled={false}
            />
          </Item>
          <Item>
            <Textarea
              onChangeText={value => setFromValues({ ...form, item: value })}
              placeholder="What"
            />
          </Item>
          <Item>
            <Input
              onChangeText={value => setFromValues({ ...form, imageURL: sanitizeUrl(value) })}
              placeholder="Image Url"
            />
          </Item>
          <Item last>
            <Textarea
              onChangeText={value => setFromValues({ ...form, description: value })}
              placeholder="Description"
            />
          </Item>
        </Form>
      </View>
      <AddDeliveryButton
        onPress={() => saveDeliveryData(form, () => navigation.navigate('Home'))}
        title="Add order"
      />
    </View>
  );
}

export default withNavigation(BringMeForm);
