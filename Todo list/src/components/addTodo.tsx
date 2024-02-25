// components/addTodo.tsx
import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Text } from 'react-native';


interface AddTodoProps {
  onAdd: (title: string) => void;
}

export const AddTodo: React.FC<AddTodoProps> = ({ onAdd }) => {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim() !== '') {
      onAdd(input);
      setInput('');
    }
  };

  return (
    <>
      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Add a todo"
        placeholderTextColor="#FFFFFF" 
        style={{color: '#FFFFFF'}} 
      />
      <TouchableOpacity onPress={handleAdd} style={{ marginBottom: 20, borderRadius: 10, backgroundColor: "#0A84FF", padding: 10, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'white', fontSize: 25 }}>Add Todo</Text>
      </TouchableOpacity>
    </>
  );
};