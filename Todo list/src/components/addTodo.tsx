
import  { useState } from 'react';
import { TextInput, TouchableOpacity, Text } from 'react-native';
import styles from '../../styles.js';



interface AddTodoProps {
  onAdd: (title: string) => void;
}
// The AddTodo component accepts an onAdd function as a prop
export const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  
  const [input, setInput] = useState('');
  // Function to handle the addition of a todo
  const handleAdd = () => {
    // sends the input to the onAdd function
    onAdd(input);
    // resets the input
    setInput('');
  };

  return (
    <>
    <TextInput
  value={input}
  onChangeText={setInput}
  placeholder="Add a todo"
  placeholderTextColor="#FFFFFF" 
  style={[styles.input, {color: '#FFFFFF'}]} 
/>
      <TouchableOpacity onPress={handleAdd} style={{ marginBottom: 20, borderRadius: 10, backgroundColor: "#0A84FF", padding: 10, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 25 }}>Add Todo</Text>
      </TouchableOpacity>
    </>
  );
};