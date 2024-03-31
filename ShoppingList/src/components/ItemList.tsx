import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { styles } from '../../Styles';
import { useItemStoreContext } from '../../store/itemStoreContext'; 

// Making the item list with the items added and delete and favorite button
export const ItemList: React.FC = () => {
  const { items, deleteItem, setFavorite } = useItemStoreContext(); 

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
            <View style={{ flexDirection: 'row' }}>
              <IconButton
                icon="heart"
                iconColor={item.favorite ? 'red' : 'grey'} 
                size={30}
                onPress={() => setFavorite(item.id, !item.favorite)} 
              />
              <IconButton
                icon="delete"
                iconColor="red"
                size={30}
                onPress={() => deleteItem(item.id)}
              />
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};