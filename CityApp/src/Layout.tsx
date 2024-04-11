// App.tsx
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import AddCityScreen from './components/AddCityScreen';
import CityScreen from './components/CityScreen';
import AddLocationScreen from './components/AddLocationScreen';
import { City } from './components/CityStore';

const AppNavigator = createStackNavigator(
  {
    ListofCities: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'List of Cities',
      },
    },
    AddCity: AddCityScreen,
    City: {
      screen: CityScreen,
      navigationOptions: ({ navigation }) => {
        const city: City = navigation.getParam('city', {});
        return {
          title: `Locations of ${city.name || 'City'}`,
        };
      },
    },
    AddLocation: {
      screen: AddLocationScreen,
      navigationOptions: ({ navigation }) => {
        const city: City = navigation.getParam('city', {});
        return {
          title: `Add Location to ${city.name || 'City'}`,
        };
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleAlign: 'center',
    },
  }
);

export default createAppContainer(AppNavigator);