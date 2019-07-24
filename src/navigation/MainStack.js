import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/home/HomeScreen';

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Bring Me',
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(MainStack);
