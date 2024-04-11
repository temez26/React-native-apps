// AddLocationScreen.tsx
import React, { useState } from 'react';
import { Input, Button } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
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
    <View style={styles.container}>
    <Input
      label="Location"
      value={location}
      onChangeText={setLocation}
      containerStyle={styles.input}
    />
    <Button title="Add Location" onPress={addLocation} buttonStyle={styles.button} />
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

export default AddLocationScreen;