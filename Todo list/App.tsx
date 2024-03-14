import React from 'react';
import { Services } from './src/services';
import { TodoApp } from './src/todoApp';

export default function App() {
  // Destructiong the necessary functions and state from services
  const { addTodo, deleteTodo, toggleTodo, setFilter, todos } = Services();
  // Rendering the TodoApp component
  return (
    <TodoApp todos={todos} onAdd={addTodo} onToggle={toggleTodo} onDelete={deleteTodo} setFilter={setFilter} />
  );
}