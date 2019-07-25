import React from 'react';
import { View, Form, Item, Input, Textarea, DatePicker } from 'native-base';

export default function BringMeForm() {
  return (
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
          <Textarea placeholder="What" />
        </Item>
        <Item last>
          <Textarea placeholder="Description" />
        </Item>
      </Form>
    </View>
  );
}
