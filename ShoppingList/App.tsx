import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import React from 'react';
import { View } from 'react-native';
import { Layout } from './src/layout';
import { styles } from './Styles';
import { ItemStoreProvider } from './store/itemStoreContext'; // import ItemStoreProvider

// main app component
export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <ItemStoreProvider> 
          <Layout />
        </ItemStoreProvider>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}