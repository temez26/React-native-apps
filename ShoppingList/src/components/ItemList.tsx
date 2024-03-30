// ItemList.tsx
import React from 'react';
import { FlatList, Text } from 'react-native';

interface Item {
  id: string;
  name: string;
  quantity: number;
}

interface ItemListProps {
  items: Item[];
}

export const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item }) => (
        <Text>{item.name} - Quantity: {item.quantity}</Text>
      )}
      keyExtractor={item => item.id}
    />
  );
};