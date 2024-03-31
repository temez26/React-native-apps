import * as React from 'react';
import { View } from 'react-native';
import { Divider, Title, List, Caption } from 'react-native-paper';
import { useItemStoreContext } from '../../store/itemStoreContext';

// History component to display the deleted items
export const History = () => {
  const { deletedItems } = useItemStoreContext(); 

  return (
    <View style={{margin: 10,}}>
      <Title style={{fontSize: 30, fontWeight: 'bold', alignSelf: 'center'}}>Deleted Items</Title>
      <Divider />
      {deletedItems.length > 0 ? (
        deletedItems.map((item) => (
          <List.Item
            key={item.id} 
            title={item.name}
            style={{padding: 10, }}
            description={`Deleted on ${item.deletedAt ? new Date(item.deletedAt).toLocaleString() : 'Unknown time'}`}
            left={() => <List.Icon icon="folder" />}
          />
        ))
      ) : (
        <Caption style={{fontSize: 20, alignSelf: 'center', marginTop: 270}}>Looks so empty...</Caption>
      )}
    </View>
  );
};