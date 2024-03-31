import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import { styles } from '../../Styles';
import { useItemStoreContext } from '../../store/itemStoreContext'; 

// AddItem component to add items to the list
export const AddItem: React.FC = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [nameError, setNameError] = useState('');
  const [quantityError, setQuantityError] = useState('');

  const { addItem } = useItemStoreContext();

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
    } else if (Number(quantity) > 999) {
      setNameError('');
      setQuantityError('Quantity cannot exceed 999');
    } else {
      addItem({ name, quantity: Number(quantity) }); 
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
      <TextInput style={styles.input} label="Quantity Max(999)" value={quantity} onChangeText={setQuantity} keyboardType="numeric" />
      {quantityError ? <Text style={styles.error}>{quantityError}</Text> : null}
      <Button style={styles.badd} mode="contained" onPress={handleAdd}>
        +
      </Button>
    </>
  );
};