// CityScreen.tsx
import React, { useState, useEffect } from 'react';
import { Button, Text, View, FlatList } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import useCityStore, { City } from './CityStore';

interface CityScreenProps {
  navigation: NavigationStackProp<{ city: City }>;
}

const CityScreen: React.FC<CityScreenProps> = ({ navigation }) => {
  const { cities, setCities } = useCityStore();
  const cityParam = navigation.getParam('city', {});
  const [city, setCity] = useState<City | null>(cityParam);

  useEffect(() => {
    const updatedCity = cities.find(c => c.id === cityParam.id) || cityParam;
    setCity(updatedCity);
  }, [cities]);

  const updateCity = (updatedCity: City) => {
    setCity(updatedCity);
  };

  if (!city) {
    return null;
  }

  return (
    <View>
      <Text>Name: {city.name}</Text>
      <Text>Country: {city.country}</Text>
      <Button title="Add Location" onPress={() => navigation.navigate('AddLocation', { city, updateCity })} />
      <Text>Locations:</Text>
      {city.locations && city.locations.map((location, index) => (
        <Text key={index}>{location}</Text>
      ))}
    </View>
  );
};

export default CityScreen;