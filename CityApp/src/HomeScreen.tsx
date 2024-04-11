// HomeScreen.tsx
import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import useCityStore from './components/CityStore';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation();
  const { cities, loading, fetchCities } = useCityStore();

  useFocusEffect(
    React.useCallback(() => {
      fetchCities();
    }, [fetchCities])
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.infoButton} onPress={() => navigation.navigate('Info')}>
          <FontAwesome name="info" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddCity')}>
          <FontAwesome name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={cities} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
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