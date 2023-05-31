import React from "react";
import { AppUI } from './AppUI';
import { TodoContext, TodoProvider } from "../TodoContext";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar curso de React", completed: false },
//   { text: "Lorar con la Llorona", completed: true },
//   { text: "Otra cosa", completed: false },
//   { text: "Otra cosa 2", completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
