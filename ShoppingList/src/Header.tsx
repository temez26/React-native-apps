// Header.tsx
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../Styles';

const Header: React.FC = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Shopping List</Text>
    </View>
  );
};

export default Header;