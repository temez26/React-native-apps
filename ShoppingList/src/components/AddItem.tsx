import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';

interface AddItemProps {
  onAdd: (item: { name: string; quantity: number }) => void;
}

export const AddItem: React.FC<AddItemProps> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleAdd = () => {
    onAdd({ name, quantity: Number(quantity) });
    setName('');
    setQuantity('');
  };

  return (
    <>
      <TextInput label="Item Name" value={name} onChangeText={setName} />
      <TextInput label="Quantity" value={quantity} onChangeText={setQuantity} keyboardType="numeric" />
      <Button mode="contained" onPress={handleAdd}>
        Add Item
      </Button>
    </>
  );
};