import React, { useState } from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

interface AddCityScreenProps {
  navigation: NavigationStackProp;
}

const AddCityScreen: React.FC<AddCityScreenProps> = ({ navigation }) => {
  const setCities = navigation.getParam('setCities', () => {});
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');

  const addCity = () => {
    setCities((prevCities) => [...prevCities, { name, country, locations: [] }]);
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