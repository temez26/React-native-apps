import React from 'react';
import { SafeAreaView, Text} from 'react-native';
import LottieView from 'lottie-react-native';
import { AddTodo } from './components/addTodo';
import { FilterButtons } from './components/filterButtons';
import { TodoList } from './components/todoList';
import { Todo } from './types';
import styles from '../styles.js';


// Defining the props for the TodoApp component
interface TodoAppProps {
  todos: Todo[];
  onAdd: (title: string) => void;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  setFilter: (filter: string) => void;
}

export const TodoApp: React.FC<TodoAppProps> = ({ todos, onAdd, onToggle, onDelete, setFilter }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Todo List</Text>
      <LottieView source={require('../assets/Fox.json')} autoPlay loop style={styles.animation} />
      <AddTodo onAdd={onAdd} />
      <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
      <FilterButtons setFilter={setFilter} />
    </SafeAreaView>
  );
};