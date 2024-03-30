import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import { Layout } from './src/components/layout';
export default function App() {
  return (
    <View style={styles.container}>
      <Layout  />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
