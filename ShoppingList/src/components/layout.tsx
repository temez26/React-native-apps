// Layout.tsx
import React, { useState } from 'react';
import { Card } from 'react-native-paper';
import { AddItem } from './AddItem';
import { ItemList } from './ItemList';

interface Item {
  id: string;
  name: string;
  quantity: number;
}

export const Layout = () => {
  const [items, setItems] = useState<Item[]>([]);

  const handleAdd = (item: { name: string; quantity: number }) => {
    setItems(currentItems => [
      ...currentItems,
      { id: Math.random().toString(), ...item },
    ]);
  };

  return (
    <Card>
      <AddItem onAdd={handleAdd} />
      <ItemList items={items} />
    </Card>
  );
};