import React from 'react';
import { StyleSheet, View } from 'react-native';

import Root from './src/Root';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <View style={styles.container}>
      <Root />
    </View>
  );
}