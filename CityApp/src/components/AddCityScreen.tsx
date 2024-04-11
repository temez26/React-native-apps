// AddCityScreen.tsx
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import useCityStore, { City } from './CityStore';

interface AddCityScreenProps {
  navigation: NavigationStackProp<{}>;
}

const AddCityScreen: React.FC<AddCityScreenProps> = ({ navigation }) => {
  const { setCities } = useCityStore();
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');

  const addCity = () => {
    const newCity: City = {
      id: uuidv4(),
      name,
      country,
    };
    setCities(currentCities => [...currentCities, newCity]);
    navigation.goBack();
  };

  return (
    <View>
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text>Country:</Text>
      <TextInput value={country} onChangeText={setCountry} />
      <Button title="Add City" onPress={addCity} />
    </View>
  );
};

export default AddCityScreen;