import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import { styles } from '../../Styles';

// Define the properties for the AddItem component
interface AddItemProps {
  onAdd: (item: { name: string; quantity: number }) => void;
}

export const AddItem: React.FC<AddItemProps> = ({ onAdd }) => {
// Define state variables for the item name and quantity, and their corresponding error messages
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [nameError, setNameError] = useState('');
  const [quantityError, setQuantityError] = useState('');
// Define the function to handle adding an item
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
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Add items to list</Text>
        <LottieView
          source={require('../../assets/list.json')}
          autoPlay
          loop
          style={{ width: 70, height: 70 }}
        />
      </View>
      <TextInput style={styles.input} label="Item Name" value={name} onChangeText={setName} />
      {nameError ? <Text style={styles.error}>{nameError}</Text> : null}
      <TextInput style={styles.input} label="Quantity" value={quantity} onChangeText={setQuantity} keyboardType="numeric" />
      {quantityError ? <Text style={styles.error}>{quantityError}</Text> : null}
      <Button style={styles.badd} mode="contained" onPress={handleAdd}>
        +
      </Button>
    </>
  );
};