import React, { useState } from 'react';
import { Input, Button } from 'react-native-elements';
import {  View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useCityStore, { City } from './CityStore';
import { RouteProp } from '@react-navigation/native';
import {styles} from '../../styles';

interface AddLocationScreenProps {
  route: RouteProp<{ params: { city: City, updateCity: (city: City) => void } }>;
}

const AddLocationScreen: React.FC<AddLocationScreenProps> = ({ route }) => {
  const navigation = useNavigation();
  const { setCities } = useCityStore();
  const city = route.params.city;
  const updateCity = route.params.updateCity;
  const [location, setLocation] = useState('');

  const addLocation = () => {
    const updatedCity = {
      ...city,
      locations: [...city.locations || [], location],
    };
    setCities(currentCities =>
      currentCities.map(c => (c.id === city.id ? updatedCity : c))
    );
    console.log(updatedCity); 
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



export default AddLocationScreen;