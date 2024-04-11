import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import AddCityScreen from './components/AddCityScreen';
import CityScreen from './components/CityScreen';
import AddLocationScreen from './components/AddLocationScreen';

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  AddCity: AddCityScreen,
  City: CityScreen,
  AddLocation: AddLocationScreen,
});

export default createAppContainer(AppNavigator);