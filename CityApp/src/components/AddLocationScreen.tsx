// AddLocationScreen.tsx
import React, { useState } from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import useCityStore, { City } from './CityStore';

interface AddLocationScreenProps {
  navigation: NavigationStackProp<{ city: City, updateCity: (city: City) => void }>;
}

const AddLocationScreen: React.FC<AddLocationScreenProps> = ({ navigation }) => {
  const { setCities } = useCityStore();
  const city = navigation.getParam('city', {});
  const updateCity = navigation.getParam('updateCity', () => {});
  const [location, setLocation] = useState('');

  const addLocation = () => {
    const updatedCity = {
      ...city,
      locations: [...city.locations || [], location],
    };
    setCities(currentCities =>
      currentCities.map(c => (c.id === city.id ? updatedCity : c))
    );
    console.log(updatedCity); // Log the updated city object
    updateCity(updatedCity);
    navigation.goBack();
  };

  return (
    <View>
      <Text>Location:</Text>
      <TextInput value={location} onChangeText={setLocation} />
      <Button title="Add Location" onPress={addLocation} />
    </View>
  );
};

export default AddLocationScreen;