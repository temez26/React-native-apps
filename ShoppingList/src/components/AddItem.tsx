// AddItem.tsx
import React, { useState } from 'react';
import { Button, TextInput, Text} from 'react-native-paper';
import { styles } from '../../Styles';

interface AddItemProps {
  onAdd: (item: { name: string; quantity: number }) => void;
}

export const AddItem: React.FC<AddItemProps> = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [nameError, setNameError] = useState('');
  const [quantityError, setQuantityError] = useState('');

  const handleAdd = () => {
    if (!name && !quantity) {
      setNameError('Enter Item Name');
      setQuantityError('Enter Item Quantity');
    } else if (!name) {
      setNameError('Enter Item Name');
      setQuantityError('');
    } else if (!quantity) {
      setNameError('');
      setQuantityError('Enter Item Quantity');
    } else {
      onAdd({ name, quantity: Number(quantity) });
      setName('');
      setQuantity('');
      setNameError('');
      setQuantityError('');
    }
  };

  return (
    <>
      <Text style={styles.title}>Add items to list</Text>
      
      <TextInput style={styles.input} label="Item Name" value={name} onChangeText={setName} />
      {nameError ? <Text style={styles.error}>{nameError}</Text> : null}
      <TextInput style={styles.input} label="Quantity" value={quantity} onChangeText={setQuantity} keyboardType="numeric" />
      {quantityError ? <Text style={styles.error}>{quantityError}</Text> : null}
      <Button style = {styles.badd} mode="contained" onPress={handleAdd}>
        +
      </Button>
    </>
  );
};