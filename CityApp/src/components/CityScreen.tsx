import React from 'react';
import { Button, Text, View, FlatList } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import useCityStore, { City } from './CityStore';

interface CityScreenProps {
  navigation: NavigationStackProp<{ city: City }>;
}

const CityScreen: React.FC<CityScreenProps> = ({ navigation }) => {
  const { cities } = useCityStore();

  return (
    <View>
      <FlatList
        data={cities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.country}</Text>
            <Button title="Add Location" onPress={() => navigation.navigate('AddLocation', { city: item })} />
          </View>
        )}
      />
    </View>
  );
};


export default CityScreen;