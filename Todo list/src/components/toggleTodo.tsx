import { TouchableOpacity, Text } from 'react-native';
import { ViewStyle } from 'react-native';
import styles from '../../styles.js';



interface ToggleTodoProps {
  done: boolean;
  onToggle: () => void;
  style?: ViewStyle | ViewStyle[];
}

export const ToggleTodo: React.FC<ToggleTodoProps> = ({ done, onToggle }) => (
  <TouchableOpacity onPress={onToggle} style={[styles.donebutton, {backgroundColor: done ? '#34C759' : '#FF3B30'}]}>
    <Text style={{ color: 'white' }}>{done ? "Done" : "Not Done"}</Text>
  </TouchableOpacity>
);