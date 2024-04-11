import React, { useState } from 'react';
import { Button, Text, View, TextInput } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

interface City {
  name: string;
  country: string;
  locations: string[];
}

interface AddLocationScreenProps {
  navigation: NavigationStackProp<{ city: City }>;
}

const AddLocationScreen: React.FC<AddLocationScreenProps> = ({ navigation }) => {
  const city = navigation.getParam('city', {});
  const [location, setLocation] = useState('');

  const addLocation = () => {
    city.locations.push(location);
    navigation.goBack();
  };

  return (
    <View>
      <Text>Location:</Text>
      <TextInput value={location} onChangeText={setLocation} />
      <Button title="Add Location" onPress={addLocation} />
    </View>
  );
};

export default AddLocationScreen;