import React from 'react';
import { Button, Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationStackProp } from 'react-navigation-stack';

interface City {
  name: string;
  country: string;
  locations: string[];
}

interface CityScreenProps {
  navigation: NavigationStackProp<{ city: City }>;
}

const CityScreen: React.FC<CityScreenProps> = ({ navigation }) => {
  const city = navigation.getParam('city', {});

  return (
    <View>
      <Text>{city.name}</Text>
      <Text>{city.country}</Text>
      <Button title="Add Location" onPress={() => navigation.navigate('AddLocation', { city })} />
      <FlatList
        data={city.locations}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <ListItem title={item} bottomDivider />}
      />
    </View>
  );
};

export default CityScreen;