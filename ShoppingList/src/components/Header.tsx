import React from 'react';
import { Text, View, TouchableOpacity, BackHandler } from 'react-native';
import { Menu } from 'react-native-paper';
import { styles } from '../../Styles';

// Setting up the header and its menu
export const Header = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleBackButtonClick = () => {
    BackHandler.exitApp();
  };
// building the header with the menu and back button
  return (
    <View style={styles.headerContainer}>
  <TouchableOpacity onPress={handleBackButtonClick} >
  <Text style={styles.backButtonText}>←</Text>
</TouchableOpacity>
<Text style={styles.headerText}>Shopping List App</Text>
<Menu
  visible={visible}
  onDismiss={closeMenu}
  anchor={
    <TouchableOpacity style={styles.menuButton} onPress={openMenu}>
      <Text style={styles.menuButtonText}>Menu</Text>
    </TouchableOpacity>
  }
  
>
  <Menu.Item onPress={() => {}} title="Main" />
  <Menu.Item onPress={() => {}} title="Items" />
</Menu>
    </View>
  );
};

