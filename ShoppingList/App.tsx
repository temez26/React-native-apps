import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import { Layout } from './src/layout';
import {styles} from './Styles';
export default function App() {
  return (
    <View style={styles.container}>
      <Layout  />
      <StatusBar style="auto" />
    </View>
  );
}

