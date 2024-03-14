import { FlatList, View, Text, Animated } from 'react-native';
import { DeleteTodo } from './deleteTodo';
import { ToggleTodo } from './toggleTodo';
import { Todo } from '../types';
import styles from '../../styles.js';


// Deleting and toggling todos
interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete }) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <Animated.View style={[styles.todoItem, { opacity: item.opacity }]}>
          <Text style={styles.todoText}>{item.title}</Text>
          <View style={{ flexDirection: 'row' }}>
            <ToggleTodo   done={item.done} onToggle={() => onToggle(item.id)} />
            <DeleteTodo onDelete={() => onDelete(item.id)} />
          </View>
        </Animated.View>
      )}
      keyExtractor={(item) => item.id.toString()}
      ListEmptyComponent={<Text style={styles.emptyMessage}>You don't have any todos yet</Text>}
    />
  );
};