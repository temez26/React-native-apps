import React, { useState, useRef } from 'react';
import { SafeAreaView, FlatList, View, TextInput, Button, StyleSheet, Text, Animated } from 'react-native';
import { Checkbox } from 'react-native-paper';
import LottieView from 'lottie-react-native';

interface Todo {
  id: number;
  title: string;
  done: boolean;
  opacity: Animated.Value;
}

let id = 0;
let deleting = false; 

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') {
      alert('Todo title cannot be empty!');
      return;
    }
    if (todos.some((todo) => todo.title === input)) {
      alert('A todo with this title already exists!');
      return;
    }
    setTodos([...todos, { id: id++, title: input, done: false, opacity: new Animated.Value(1) }]);
    setInput('');
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    if (deleting) return;
    deleting = true;
    Animated.timing(todos.find(todo => todo.id === id)?.opacity || new Animated.Value(1), {
      toValue: 0,
      duration: 1500,
      useNativeDriver: false,
    }).start(() => {
      setTodos(todos.filter((todo) => todo.id !== id));
    });
    deleting = false;
  };

  return (
    <SafeAreaView style={styles.container}>
      
    <Text style={styles.header}>Todo List</Text>
    <LottieView source={require('./assets/Fox.json')} autoPlay loop style={styles.animation} />
    
  <TextInput
    value={input}
    onChangeText={setInput}
    placeholder="Add a todo"
    style={styles.input}
  />
  <View style={{ marginBottom: 20, borderRadius: 10 }}>
    <Button onPress={addTodo} title="Add Todo" color="#841584" />
  </View>
  <FlatList
    data={todos}
    renderItem={({ item }) => (
      <Animated.View style={[styles.todoItem, { opacity: item.opacity }]}>
        <Checkbox
          status={item.done ? 'checked' : 'unchecked'}
          onPress={() => toggleTodo(item.id)}
          color={item.done ? 'green' : 'red'}
        />
        <Text style={styles.todoText}>{item.title}</Text>
        <Button onPress={() => deleteTodo(item.id)} title="Delete" color="#ff0000" />
      </Animated.View>
    )}
    keyExtractor={(item) => item.id.toString()}
  />

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 100,
    backgroundColor: 'black',
  },
  header: {
    fontSize: 60, 
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#FF8C00', 
    textShadowColor: '#000000', 
    textShadowOffset: { width: 2, height: 2 }, 
    textShadowRadius: 10, 
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  animation: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },

  input: {
    borderRadius: 5,
    height: 40,
    borderColor: 'gray',
    backgroundColor: '#583100', 
    
    fontWeight: 'bold',
    borderWidth: 2,
    fontSize: 17,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
    backgroundColor: '#3F51B5', 
    padding: 10, 
    borderRadius: 5, 
  },

  todoText: {
    flex: 1,
    color: '#FFFFFF', 
  },
});