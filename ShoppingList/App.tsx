import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Layout } from './src/layout';
import {styles} from './Styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <Layout />
      <StatusBar style="auto" />
    </View>
  );
}