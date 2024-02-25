import React from 'react';
import { Services } from './src/services';
import { TodoApp } from './src/todoApp';

export default function App() {
  const { addTodo, deleteTodo, toggleTodo, setFilter, todos } = Services();

  return (
    <TodoApp todos={todos} onAdd={addTodo} onToggle={toggleTodo} onDelete={deleteTodo} setFilter={setFilter} />
  );
}