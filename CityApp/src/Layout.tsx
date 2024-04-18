import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import AddCityScreen from './components/AddCityScreen';
import CityScreen from './components/CityScreen';
import AddLocationScreen from './components/AddLocationScreen';
import Info from './components/Info';
import { City } from './components/CityStore';

type RootStackParamList = {
  ListofCities: undefined;
  AddCity: undefined;
  Info: undefined;
  City: { city: City };
  AddLocation: { city: City };
};

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions = (title: string): StackNavigationOptions => ({
  title,
  headerTitleAlign: 'center',
});

const screens = {
  ListofCities: { component: HomeScreen, title: 'List of Cities' },
  AddCity: { component: AddCityScreen, title: 'Add City' },
  Info: { component: Info, title: 'Info' },
  City: { component: CityScreen, title: (route) => `Locations of ${route.params?.city.name}` },
  AddLocation: { component: AddLocationScreen, title: (route) => `Add Location to ${route.params?.city.name}` },
};

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="ListofCities">
      {Object.entries(screens).map(([name, { component, title }]) => (
        <Stack.Screen 
          key={name}
          name={name} 
          component={component} 
          options={({ route }) => screenOptions(typeof title === 'function' ? title(route) : title)} 
        />
      ))}
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;