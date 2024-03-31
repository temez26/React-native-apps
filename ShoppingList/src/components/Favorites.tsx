import * as React from 'react';
import { FlatList, View } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { useItemStoreContext, Item } from '../../store/itemStoreContext';

export const Favorites = () => {
    const { items } = useItemStoreContext(); // use the useItemStoreContext hook to get the items
    const favorites = items.filter(item => item.favorite); // filter the items to get only the favorites
   
    console.log('Rendering Favorites');
    console.log('Items:', items);
    console.log('Favorites:', favorites);
   
   const renderItem = ({ item }: { item: Item }) => (
    <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
      <Card>
        <Card.Content>
          <Text>{item.name}</Text>
        </Card.Content>
      </Card>
    </View>
  );

    return (
        <FlatList
            data={favorites} 
            renderItem={renderItem}
            numColumns={4}
            keyExtractor={(item) => item.id}
        />
    );
};