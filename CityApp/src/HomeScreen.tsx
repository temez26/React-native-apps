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

 

  return (
    <View>
      <Button title="Add City" onPress={() => navigation.navigate('AddCity', { setCities })} />
      <FlatList
        data={cities}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          console.log(item ); // Log each city object
          return (
            
            <ListItem bottomDivider onPress={() => navigation.navigate('City', { city: item })}>
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{`Country: ${item.country}, ID: ${item.id}`}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;