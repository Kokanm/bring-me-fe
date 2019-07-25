/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import MainStack from './src/navigation/MainStack';

const loadFonts = Font.loadAsync({
  Roboto: require('native-base/Fonts/Roboto.ttf'),
  Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
  ...Ionicons.font,
});

export default function App() {
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    loadFonts.then(() => setIsReady(true));
  }, []);

  return isReady ? <MainStack /> : <AppLoading />;
}
