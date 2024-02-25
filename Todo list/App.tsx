import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView, FlatList, View, TextInput, Button, StyleSheet, Text, Animated,TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface Todo {
  id: number;
  title: string;
  done: boolean;
  opacity: Animated.Value;
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');
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

  const addTodo = () => {
    if (input.trim() === '') {
      alert('Todo title cannot be empty!');
      return;
    }
    if (todos.some((todo) => todo.title === input)) {
      alert('A todo with this title already exists!');
      return;
    }
    setTodos([...todos, { id: idRef.current++, title: input, done: false, opacity: new Animated.Value(1) }]);
    AsyncStorage.setItem('idRef', JSON.stringify(idRef.current));
    setInput('');
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };



  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.header}>Todo List</Text>
      <LottieView source={require('./assets/Fox.json')} autoPlay loop style={styles.animation} />
      
      <TextInput
  value={input}
  onChangeText={setInput}
  placeholder="Add a todo"
  placeholderTextColor="#FFFFFF" 
  style={[styles.input, {color: '#FFFFFF'}]} 
/>
  
<TouchableOpacity onPress={addTodo} style={{ marginBottom: 20, borderRadius: 10, backgroundColor: "#0A84FF", padding: 10, justifyContent: 'center', alignItems: 'center' }}>
  <Text style={{ color: 'white', fontSize: 25 }}>Add Todo</Text>
</TouchableOpacity>
      
      <FlatList
        data={filteredTodos}
        renderItem={({ item }) => (
          <Animated.View style={[styles.todoItem, { opacity: item.opacity }]}>
            <Text style={styles.todoText}>{item.title}</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={[styles.donebutton, {backgroundColor: item.done ? '#34C759' : '#FF3B30'}]} 
                onPress={() => toggleTodo(item.id)}
              >
                <Text style={{ color: 'white' }}>{item.done ? "Done" : "Not Done"}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.donebutton, {backgroundColor: '#FF3B30'}]} 
                onPress={() => deleteTodo(item.id)}
              >
                <Text style={{ color: 'white' }}>Delete</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        )}
        keyExtractor={(item) => item.id.toString()}
        
        ListEmptyComponent={<Text style={styles.emptyMessage}>You don't have any todos yet</Text>}
      />
  
  <View style={[styles.filterButtons,{ flexDirection: 'row', justifyContent: 'space-between' }]}>
  <TouchableOpacity onPress={() => setFilter('all')} style={{backgroundColor: "#0A84FF", padding: 10,borderRadius: 5,}}>
    <Text style={{fontSize: 25, color: 'white'}}>All</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => setFilter('completed')} style={{backgroundColor: "#34C759", padding: 10,borderRadius: 5,}}>
    <Text style={{fontSize: 25, color: 'white'}}>Completed</Text>
  </TouchableOpacity>
  <TouchableOpacity onPress={() => setFilter('active')} style={{backgroundColor: "#FF3B30", padding: 10,borderRadius: 5,}}>
    <Text style={{fontSize: 25, color: 'white'}}>Active</Text>
  </TouchableOpacity>
</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#000000', // pure black
  },
  header: {
    fontSize: 50, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'orange', // white
  },
  filterButtons: {
    borderRadius: 10,
    backgroundColor: '#1C1C1E', // dark gray
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  emptyMessage: {
    color: '#FFFFFF', // white
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
  },

  donebutton: {
    marginRight: 10,
    padding: 10,
    borderRadius: 10,
    fontWeight: 'bold',
    elevation: 3, 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  animation: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    borderRadius: 10,
    height: 40,
    borderColor: '#3A3A3C', // even darker gray
    backgroundColor: '#1C1C1E', // dark gray
    fontWeight: 'bold',
    borderWidth: 1,
    fontSize: 17,
    marginBottom: 10,
    paddingHorizontal: 8,
    color: '#FFFFFF', // white
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
    backgroundColor: '#1C1C1E', // dark gray
    padding: 10, 
    borderRadius: 10, 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
  },
  todoText: {
    flex: 1,
    color: '#FFFFFF', // white
    fontWeight: 'bold',
    fontSize: 18,
  },
});