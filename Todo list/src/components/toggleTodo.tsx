import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { ViewStyle } from 'react-native';


interface ToggleTodoProps {
  done: boolean;
  onToggle: () => void;
  style?: ViewStyle | ViewStyle[];
}

export const ToggleTodo: React.FC<ToggleTodoProps> = ({ done, onToggle }) => (
  <TouchableOpacity onPress={onToggle} style={{backgroundColor: done ? '#34C759' : '#FF3B30', padding: 10, borderRadius: 5, marginRight: 5}}>
    <Text style={{ color: 'white' }}>{done ? "Done" : "Not Done"}</Text>
  </TouchableOpacity>
);