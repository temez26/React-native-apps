import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,StackNavigationOptions } from '@react-navigation/stack';
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

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="ListofCities">
      <Stack.Screen name="ListofCities" component={HomeScreen} options={screenOptions('List of Cities')} />
      <Stack.Screen name="AddCity" component={AddCityScreen} options={screenOptions('Add City')} />
      <Stack.Screen name="Info" component={Info} options={screenOptions('Info')} />
      <Stack.Screen 
        name="City" 
        component={CityScreen} 
        options={({ route }) => screenOptions(`Locations of ${route.params?.city.name}`)} 
      />
      <Stack.Screen 
        name="AddLocation" 
        component={AddLocationScreen} 
        options={({ route }) => screenOptions(`Add Location to ${route.params?.city.name}`)} 
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;