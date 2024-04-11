import React from 'react';
import { Button, FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationStackProp } from 'react-navigation-stack';
import useCityStore from './components/CityStore';

interface HomeScreenProps {
  navigation: NavigationStackProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { cities, setCities } = useCityStore();

  console.log(cities); // Log the cities array

  return (
    <View>
      <Button title="Add City" onPress={() => navigation.navigate('AddCity', { setCities })} />
      <FlatList
        data={cities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          console.log(item); // Log each city object
          return (
            <ListItem
              title={item.name}
              subtitle={`Country: ${item.country}, ID: ${item.id}`}
              bottomDivider
              chevron
              onPress={() => navigation.navigate('City', { city: item })}
            />
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;