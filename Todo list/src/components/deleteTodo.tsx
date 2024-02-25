import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

interface DeleteTodoProps {
  onDelete: () => void;
  
}

export const DeleteTodo: React.FC<DeleteTodoProps> = ({ onDelete }) => (
  <TouchableOpacity onPress={onDelete} style={{backgroundColor: '#FF3B30', padding: 10, borderRadius: 5}}>
    <Text style={{ color: 'white' }}>Delete</Text>
  </TouchableOpacity>
);