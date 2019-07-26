import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, Form, Item, Input, DatePicker } from 'native-base';
import { withNavigation } from 'react-navigation';
import { addDelivery } from '../../../relay/mutations/AddDelivery';

const AddOrderButton = styled.Button`
  align-self: center;
`;

const saveDeliveryData = (delivery, onSuccess) => {
  addDelivery({
    ...delivery,
    type: 'Offer',
  }).then(() => onSuccess());
};

function IWantToBringForm({ navigation }) {
  const [form, setFromValues] = useState({
    locationFrom: '',
    locationTo: '',
    deliverBy: '',
    item: '',
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
            <Input keyboardType="number-pad" placeholder="Free space in the luggage (kg)" />
          </Item>
        </Form>
      </View>
      <AddOrderButton
        onPress={() => saveDeliveryData(form, () => navigation.navigate('Home'))}
        title="Add suggestion"
      />
    </View>
  );
}

export default withNavigation(IWantToBringForm);
