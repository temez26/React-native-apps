import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Info: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CityApp</Text>
      <Text style={styles.subtitle}>Made by Teemu Kalmari</Text>
      <Text style={styles.text}>This app allows you to add Cities to a list and then add specific locations to specific city.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Info;