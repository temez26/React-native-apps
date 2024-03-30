// ItemList.tsx
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../Styles';

interface Item {
  id: string;
  name: string;
  quantity: number;
}

interface ItemListProps {
  items: Item[];
  onDelete: (id: string) => void;
}

export const ItemList: React.FC<ItemListProps> = ({ items, onDelete }) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <View style={styles.nameContainer}>
          <Text style={styles.quantity}>{item.quantity}</Text>
  <Text style={styles.name}>{item.name}</Text>
          </View>
          
          <TouchableOpacity style={styles.bdelete} onPress={() => onDelete(item.id)}>
            <Text>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={item => item.id}
    />
  );
};