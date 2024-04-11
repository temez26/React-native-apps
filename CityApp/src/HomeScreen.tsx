// HomeScreen.tsx
import React, { useEffect } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationStackProp } from 'react-navigation-stack';
import { FontAwesome } from '@expo/vector-icons';
import useCityStore from './components/CityStore';
import { useFocusEffect } from '@react-navigation/native';

interface HomeScreenProps {
  navigation: NavigationStackProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { cities, setCities } = useCityStore();
 
 
  return (
    <View style={styles.container}>
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.infoButton} onPress={() => navigation.navigate('Info')}>
        <FontAwesome name="info" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddCity', { setCities })}>
        <FontAwesome name="plus" size={24} color="black" />
      </TouchableOpacity>
    </View>
    <FlatList
      data={cities} 
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        console.log(item ); 
        return (
          <ListItem bottomDivider onPress={() => navigation.navigate('City', { city: item })}>
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{`Country: ${item.country}`}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        );
      }}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    
  },
  addButton: {
    backgroundColor: 'lightgray',
    padding: 10,
  },
  infoButton: {
    backgroundColor: 'lightgray',
    padding: 10,
  },
});

export default HomeScreen;