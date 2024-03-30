import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Layout } from './src/layout';
import {styles} from './Styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Layout />
      <StatusBar style="auto" />
    </View>
  );
}