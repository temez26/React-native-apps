// App.tsx
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import AddCityScreen from './components/AddCityScreen';
import CityScreen from './components/CityScreen';
import AddLocationScreen from './components/AddLocationScreen';
import { City } from './components/CityStore';

type RootStackParamList = {
  ListofCities: undefined;
  AddCity: undefined;
  City: { city: City };
  AddLocation: { city: City };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="ListofCities">
      <Stack.Screen name="ListofCities" component={HomeScreen} options={{ title: 'List of Cities' }} />
      <Stack.Screen name="AddCity" component={AddCityScreen} />
      <Stack.Screen name="City" component={CityScreen} options={({ route }) => ({ title: `Locations of ${route.params.city.name}` })} />
      <Stack.Screen name="AddLocation" component={AddLocationScreen} options={({ route }) => ({ title: `Add Location to ${route.params.city.name}` })} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;