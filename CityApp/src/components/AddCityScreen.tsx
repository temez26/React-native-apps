
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import useCityStore, { City } from './CityStore';
import { Button, Card, TextInput } from 'react-native-paper';

const AddCityScreen: React.FC = () => {
  const navigation = useNavigation();
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
    <Card>
      <Card.Content>
        <TextInput
          label="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          label="Country"
          value={country}
          onChangeText={setCountry}
        />
        <Button mode="contained" onPress={addCity}>
          Add City
        </Button>
      </Card.Content>
    </Card>
  );
};

export default AddCityScreen;