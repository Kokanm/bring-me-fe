import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/home/HomeScreen';
import OrderDetails from './screens/orderDetails/OrderDetails';
import BringMeForm from './screens/bringMeForm/BringMeForm';

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Bring Me',
      },
    },
    OrderDetails: {
      screen: OrderDetails,
      navigationOptions: {
        title: 'Details',
      },
    },
    BringMeForm: {
      screen: BringMeForm,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(MainStack);
