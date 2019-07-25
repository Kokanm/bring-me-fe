import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/home/HomeScreen';
import DeliveryDetails from './screens/deliveryDetails/DeliveryDetails';
import BringMeForm from './screens/bringMeForm/BringMeForm';
import IWantToBringForm from './screens/IWantToBringForm/iWantToBringForm';

const MainStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Bring Me',
      },
    },
    DeliveryDetails: {
      screen: DeliveryDetails,
      navigationOptions: {
        title: 'Details',
      },
    },
    BringMeForm: {
      screen: BringMeForm,
    },
    IWantToBringForm: {
      screen: IWantToBringForm,
      navigationOptions: {
        title: 'I want to bring',
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(MainStack);
