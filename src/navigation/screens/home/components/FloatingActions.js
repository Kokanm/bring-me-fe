/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { FloatingAction as RNFloatingActions } from 'react-native-floating-action';
import { Text } from 'native-base';
import { withNavigation } from 'react-navigation';

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

function FloatingAction({ navigation }) {
  return (
    <RNFloatingActions
      distanceToEdge={30}
      actions={actions}
      onPressItem={name => {
        switch (name) {
          case 'bring_me':
            navigation.navigate('BringMeForm');
            break;
          case 'i_want_to_bring':
            navigation.navigate('IWantToBringForm');
            break;
          default:
            break;
        }
      }}
    />
  );
}

export default withNavigation(FloatingAction);
