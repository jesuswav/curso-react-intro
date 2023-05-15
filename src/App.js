import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./TodoButton";

const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar curso de React", completed: false },
  { text: "Lorar con la Llorona", completed: true },
  { text: "Otra cosa", completed: false },
  { text: "Otra cosa 2", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={16} total={25} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
        />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
