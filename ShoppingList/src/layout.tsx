import React from 'react';
import { View } from 'react-native'; 
import { Card } from 'react-native-paper';
import { AddItem } from './components/AddItem';
import { ItemList } from './components/ItemList';
import { useItemStore } from '../store/itemStore';
import { styles } from '../Styles';

export const Layout = () => {
  const { items, addItem, deleteItem } = useItemStore();

  return (
    <View > 
      <Card style={styles.card}>
        <AddItem onAdd={addItem} />
      </Card>
      <ItemList items={items} onDelete={deleteItem} />
    </View>
  );
};