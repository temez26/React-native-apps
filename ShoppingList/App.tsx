// App.tsx
import { StatusBar } from 'expo-status-bar';
import { PaperProvider, DefaultTheme, MD3DarkTheme} from 'react-native-paper';
import React from 'react';
import { View } from 'react-native';
import { Layout } from './src/layout';
import { styles } from './Styles';
import { ItemStoreProvider } from './store/itemStoreContext';
import { DarkModeContext } from './DarkModeContext';

// main app component
export default function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: '#e0e0e0', 
      surface: '#e0e0e0', 
      
    },
  };

  const theme = isDarkMode ? MD3DarkTheme : MyTheme;

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <PaperProvider theme={theme}>
        <View style={styles.container}>
          <ItemStoreProvider>
            <Layout />
          </ItemStoreProvider>
          <StatusBar style="auto" />
        </View>
      </PaperProvider>
    </DarkModeContext.Provider>
  );
}