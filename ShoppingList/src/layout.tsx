import React from 'react';
import { View } from 'react-native'; 
import { Card } from 'react-native-paper';
import { AddItem } from './components/AddItem';
import { ItemList } from './components/ItemList';
import { useItemStore } from '../store/itemStore';
import {Header} from './components/Header';
import { styles } from '../Styles';


export const Layout = () => {
   // This gives us the current items, and functions to add and delete items
  const { items, addItem, deleteItem } = useItemStore();

  return (
    <View style={{ flex: 1 }}> 
      <Header />
      <Card style={styles.card}>
        <AddItem onAdd={addItem} />
      </Card>
      <ItemList items={items} onDelete={deleteItem} />
    </View>
  );
};