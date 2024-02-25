import { TouchableOpacity, Text } from 'react-native';
import styles from '../../styles.js'; 

interface DeleteTodoProps {
  onDelete: () => void;
  
}

export const DeleteTodo: React.FC<DeleteTodoProps> = ({ onDelete }) => (
  <TouchableOpacity onPress={onDelete} style={[styles.donebutton, {backgroundColor: '#FF3B30'}]}>
    <Text style={{ color: 'white' }}>Delete</Text>
  </TouchableOpacity>
);