import React, { useState } from 'react';
import { Button, FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationStackProp } from 'react-navigation-stack';

interface City {
  name: string;
  country: string;
  locations: string[];
}

interface HomeScreenProps {
  navigation: NavigationStackProp;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [cities, setCities] = useState<City[]>([]);

  return (
    <View>
      <Button title="Add City" onPress={() => navigation.navigate('AddCity', { setCities })} />
      <FlatList
        data={cities}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <ListItem
            title={item.name}
            subtitle={item.country}
            bottomDivider
            chevron
            onPress={() => navigation.navigate('City', { city: item })}
          />
        )}
      />
    </View>
  );
};

export default HomeScreen;