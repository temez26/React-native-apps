// AddItem.tsx
import React, { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { styles } from '../../Styles';

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
      <TextInput style={styles.input} label="Item Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} label="Quantity" value={quantity} onChangeText={setQuantity} keyboardType="numeric" />
      <Button style={styles.button} mode="contained" onPress={handleAdd}>
        Add Item
      </Button>
    </>
  );
};