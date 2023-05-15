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
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  // estados derivados
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();

    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos]; //nuevo array que recibe los valores actuales en cada actualización
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text //buscamos el index de las tareas
    );
    newTodos[todoIndex].completed = true; //buscamos el index de las tareas completadas
    setTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos]; //nuevo array que recibe los valores actuales en cada actualización
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text //buscamos el index de las tareas
    );
    newTodos.splice(todoIndex, 1); //con este método cortamos los 
    setTodos(newTodos);
  };

  return (
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
