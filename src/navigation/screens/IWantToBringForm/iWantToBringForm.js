import React from 'react';
import styled from 'styled-components/native';
import { View, Form, Item, Input, DatePicker } from 'native-base';

const AddOrderButton = styled.Button`
  align-self: center;
`;

export default function IWantToBringForm() {
  return (
    <View>
      <View>
        <Form>
          <Item>
            <Input placeholder="From" />
          </Item>
          <Item>
            <Input placeholder="To" />
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
              onDateChange={() => ({})}
              disabled={false}
            />
          </Item>
          <Item>
            <Input keyboardType="number-pad" placeholder="Free space in the luggage (kg)" />
          </Item>
        </Form>
      </View>
      <AddOrderButton title="Add suggestion" />
    </View>
  );
}
