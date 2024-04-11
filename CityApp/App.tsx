import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppNavigator from './src/Layout';

export default function App() {
  return (
    <>
      <AppNavigator />
      <StatusBar style="auto" />
    </>
  );
}