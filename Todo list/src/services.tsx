import { useState, useRef, useEffect } from 'react';
import { Animated } from 'react-native';
import { Todo } from './types';

import AsyncStorage from '@react-native-async-storage/async-storage';



export const Services = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState('all');
  const [deletingTodos, setDeletingTodos] = useState<Todo[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    AsyncStorage.getItem('idRef')
      .then(value => {
        if (value !== null) {
          idRef.current = JSON.parse(value);
        }
      });
  }, []);

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

  useEffect(() => {
    const todosToStore = todos.map(({ id, title, done }) => ({ id, title, done }));
    AsyncStorage.setItem('todos', JSON.stringify(todosToStore));
  }, [todos]);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.done;
    if (filter === 'active') return !todo.done;
    return true;
  });

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

  const deleteTodo = (id: number) => {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
      setDeletingTodos([...deletingTodos, todo]);
    } else {
      console.error(`Todo with id ${id} not found`);
    }
  };

  const addTodo = (title: string) => {
    if (title.trim() === '') {
      alert('Todo title cannot be empty!');
      return;
    }
    if (todos.some((todo) => todo.title === title)) {
      alert('A todo with this title already exists!');
      return;
    }
    setTodos([...todos, { id: idRef.current++, title: title, done: false, opacity: new Animated.Value(1) }]);
    AsyncStorage.setItem('idRef', JSON.stringify(idRef.current));
  };

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