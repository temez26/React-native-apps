import React from 'react';
import { FlatList, View,  TouchableOpacity, ActivityIndicator } from 'react-native';
import { ListItem } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import useCityStore, {City} from './CityStore';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import {styles} from '../../styles';

type RootStackParamList = {
  Info: undefined;
  AddCity: undefined;
  City: { city: City };
};

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const { cities, loading, fetchCities } = useCityStore();

  useFocusEffect(
    React.useCallback(() => {
      fetchCities();
    }, [fetchCities])
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const renderButton = (name: string, screen: keyof RootStackParamList) => (
    <TouchableOpacity style={styles.buttonmenu} onPress={() => navigation.navigate(screen)}>
      <FontAwesome name={name} size={24} color="black" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        {renderButton("info", "Info")}
        {renderButton("plus", "AddCity")}
      </View>
      <FlatList
        data={cities} 
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem bottomDivider onPress={() => navigation.navigate('City', { city: item })}>
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{`Country: ${item.country}`}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        )}
      />
    </View>
  );
};



export default HomeScreen;