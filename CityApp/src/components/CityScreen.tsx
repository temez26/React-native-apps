// CityScreen.tsx
import React, { useState, useEffect } from 'react';
import { Button, Text, View, FlatList, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import useCityStore, { City } from './CityStore';
import { RouteProp } from '@react-navigation/native';

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
    <View style={styles.container}>
      <Text style={styles.title}>Country: {city.country}</Text>
      <Button title="Add Location" onPress={() => navigation.navigate('AddLocation', { city, updateCity })} />
      <Text style={styles.subtitle}>Locations:</Text>
      <FlatList
        data={city.locations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{item}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginTop: 10,
  },
  item: {
    fontSize: 14,
    marginTop: 5,
  },
});

export default CityScreen;