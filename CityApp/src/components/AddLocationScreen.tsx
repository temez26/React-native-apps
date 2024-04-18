import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import useCityStore, { City } from './CityStore';
import { RouteProp } from '@react-navigation/native';
import { Button, Card, TextInput } from 'react-native-paper';

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
    <Card>
      <Card.Content>
        <TextInput
          label="Location"
          value={location}
          onChangeText={setLocation}
        />
        <Button mode="contained" onPress={addLocation}>
          Add Location
        </Button>
      </Card.Content>
    </Card>
  );
};

export default AddLocationScreen;