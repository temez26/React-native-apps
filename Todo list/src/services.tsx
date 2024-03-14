import { useState, useRef, useEffect } from 'react';
import { Animated, Alert } from 'react-native';
import { Todo } from './types';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const Services = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState('all');
  const [deletingTodos, setDeletingTodos] = useState<Todo[]>([]);
  const idRef = useRef(0);
  //loads the idRef from AsyncStorage when component mounts
  useEffect(() => {
    AsyncStorage.getItem('idRef')
      .then(value => {
        if (value !== null) {
          idRef.current = JSON.parse(value);
        }
      });
  }, []);
  //loads the todos from AsyncStorage when component mounts
  useEffect(() => {
    AsyncStorage.getItem('todos')
      .then(value => {
        if (value !== null) {
          const storedTodos = JSON.parse(value);
          const todosWithOpacity = storedTodos.map((todo: Todo) => ({
            ...todo,
            opacity: new Animated.Value(1),
          }));
          setTodos(todosWithOpacity);
        }
      });
  }, []);
   // saves the todos to AsyncStorage when the todos state changes
  useEffect(() => {
    const todosToStore = todos.map(({ id, title, done }) => ({ id, title, done }));
    AsyncStorage.setItem('todos', JSON.stringify(todosToStore));
  }, [todos]);
  //shows the todos based on the filter
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.done;
    if (filter === 'active') return !todo.done;
    return true;
  });
  //deletes the todos with animation
  useEffect(() => {
    if (deletingTodos.length > 0) {
      const todo = deletingTodos[0];
      Animated.timing(todo.opacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: false,
      }).start(() => {
        setTodos(todos.filter((t) => t.id !== todo.id));
        setDeletingTodos(deletingTodos.slice(1));
      });
    }
  }, [deletingTodos]);
   //deletes the todos
  const deleteTodo = (id: number) => {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
      
      setDeletingTodos([...deletingTodos, todo]);
    } else {
      Alert.alert(`Todo with id ${id} not found`);
    }
  };
  //adds the todos
  const addTodo = (title: string) => {
   
    if (title.trim() === '') {   
      Alert.alert('Todo cannot be empty!');
      
      return;
    }
    if (todos.some((todo) => todo.title === title)) {
      Alert.alert('A todo with this title already exists!');
      return;
    }
    setTodos([...todos, { id: idRef.current++, title: title, done: false, opacity: new Animated.Value(1) }]);
    AsyncStorage.setItem('idRef', JSON.stringify(idRef.current));
    
  };
  //toggles the todos
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return {
    todos: filteredTodos,
    addTodo,
    deleteTodo,
    toggleTodo,
    setFilter,
  };
};