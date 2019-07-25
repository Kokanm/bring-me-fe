/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Alert } from 'react-native';
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
    name: 'want_to_bring',
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
          case 'want_to_bring':
          default:
            Alert.alert('Title', `selected button: ${name}`);
            break;
        }
      }}
    />
  );
}

export default withNavigation(FloatingAction);
