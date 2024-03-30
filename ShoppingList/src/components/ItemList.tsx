import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../Styles';
import { Item } from '../../store/itemStore';

// Getting the items from the store and handling the delete function
interface ItemListProps {
  items: Item[];
  onDelete: (id: string) => void;
}
// making the item list with the items added and making delete button
export const ItemList: React.FC<ItemListProps> = ({ items, onDelete }) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={styles.nameContainer}>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <Text style={styles.name}>{item.name}</Text>
            </View>
            
            <TouchableOpacity style={styles.bdelete} onPress={() => onDelete(item.id)}>
              <Text style={styles.bfont}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};