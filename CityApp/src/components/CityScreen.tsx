import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useCityStore, { City } from './CityStore';
import { RouteProp } from '@react-navigation/native';
import { Button, Card, Title, Subheading, List } from 'react-native-paper';

interface CityScreenProps {
  route: RouteProp<{ params: { city: City } }>;
}

const CityScreen: React.FC<CityScreenProps> = ({ route }) => {
  const navigation = useNavigation();
  const { cities } = useCityStore();
  const cityParam = route.params.city;
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
    <Card>
      <Card.Content>
        <Title>Country: {city.country}</Title>
        <Button mode="contained" onPress={() => navigation.navigate('AddLocation', { city, updateCity })}>
          Add Location
        </Button>
        <Subheading>Locations:</Subheading>
        <FlatList
          data={city.locations}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <List.Item
              title={item}
              right={() => <List.Icon icon="chevron-right" />}
            />
          )}
        />
      </Card.Content>
    </Card>
  );
};

export default CityScreen;