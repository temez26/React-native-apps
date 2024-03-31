import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../Styles';
import { useItemStoreContext } from '../../store/itemStoreContext'; // import useItemStoreContext

// making the item list with the items added and making delete button
export const ItemList: React.FC = () => {
  const { items, deleteItem, setFavorite } = useItemStoreContext(); // use the hook to get the values

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
            <TouchableOpacity onPress={() => setFavorite(item.id, !item.favorite)}>
              <Text style={styles.bfont}>{item.favorite ? 'Unfavorite' : 'Favorite'}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.bdelete} onPress={() => deleteItem(item.id)}>
              <Text style={styles.bfont}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};