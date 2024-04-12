import React from 'react';
import { View, Text} from 'react-native';
import { styles } from '../../styles';

const Info: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CityApp</Text>
      <Text style={styles.subtitle}>Made by Teemu Kalmari</Text>
      <Text style={styles.text}>This app allows you to add Cities to a list and then add specific locations to specific city.</Text>
    </View>
  );
};


export default Info;