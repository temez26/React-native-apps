import React from 'react';
import { View } from 'react-native'; 
import { Navigation } from './components/Navigation';
import {Header} from './components/Header';


export const Layout = () => {
  return (
    <View style={{ flex: 1 }}> 
      <Header />
      <Navigation />
    </View>
  );
};