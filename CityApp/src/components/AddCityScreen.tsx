import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import {  View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import useCityStore, { City } from './CityStore';
import {styles} from '../../styles';

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
    <View style={styles.container}>
      <Input
        label="Name"
        value={name}
        onChangeText={setName}
        containerStyle={styles.input}
      />
      <Input
        label="Country"
        value={country}
        onChangeText={setCountry}
        containerStyle={styles.input}
      />
      <Button title="Add City" onPress={addCity} buttonStyle={styles.button} />
    </View>
  );
};


export default AddCityScreen;