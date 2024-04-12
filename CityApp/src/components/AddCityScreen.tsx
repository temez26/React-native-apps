import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import useCityStore, { City } from './CityStore';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#2089dc',
  },
});

export default AddCityScreen;