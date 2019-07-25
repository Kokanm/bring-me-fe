/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { FloatingAction as RNFloatingActions } from 'react-native-floating-action';
import { Text } from 'native-base';

const actions = [
  {
    text: 'Bring me',
    name: 'bring_me',
    icon: <Text>📦</Text>,
    position: 1,
  },
  {
    text: 'I want to bring',
    name: 'i_want_to_bring',
    icon: <Text>🛫</Text>,
    position: 2,
  },
];

export default function FloatingAction() {
  return (
    <RNFloatingActions
      distanceToEdge={30}
      actions={actions}
      onPressItem={name => {
        console.log(`selected button: ${name}`);
      }}
    />
  );
}
