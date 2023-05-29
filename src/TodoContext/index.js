import React from "react";
import { useLocalStorage } from "./useLocalStorage";


const TodoContext = React.createContext();

function TodoProvider({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []); // estado
  // ahora podemos llamar a nuestro custom hook en lugar de el actualizador de react
  const [searchValue, setSearchValue] = React.useState(''); //estado para buscar

  // estados derivados
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    //buscar todos
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos]; //nuevo array que recibe los valores actuales en cada actualización
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text //buscamos el index de las tareas
    );
    newTodos[todoIndex].completed = true; //buscamos el index de las tareas completadas
    saveTodos(newTodos); //guardamos la modificación del array en localStorage
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos]; //nuevo array que recibe los valores actuales en cada actualización
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text //buscamos el index de las tareas
    );
    newTodos.splice(todoIndex, 1); //con este método cortamos los
    saveTodos(newTodos); //guardamos la modificación del array en localStorage
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
      }}
    >
      {children} // le pasamos el componente hijo que podra utilizar // las
      props que estamos pasando arriba.
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

