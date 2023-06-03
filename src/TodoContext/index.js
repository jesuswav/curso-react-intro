import React from "react";
import { useLocalStorage } from "./useLocalStorage";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar curso de React", completed: false },
//   { text: "Lorar con la Llorona", completed: true },
//   { text: "Otra cosa", completed: false },
//   { text: "Otra cosa 2", completed: false },
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
// localStorage.removeItem("TODOS_V1");

const TodoContext = React.createContext();

function TodoProvider({ children }) {
  console.log('ejecutando provider')
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []); // estado
  // ahora podemos llamar a nuestro custom hook en lugar de el actualizador de react
  const [searchValue, setSearchValue] = React.useState(''); //estado para buscar
  const [openModal, setOpenModal] = React.useState(false);

  // estados derivados
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    //buscar todos
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  // añadir nuevos TODOS
  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });
    saveTodos(newTodos);
  };

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
    <TodoContext.Provider value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
     // le pasamos el componente hijo que podra utilizar // las
    // props que estamos pasando arriba.
  );
}

export { TodoContext, TodoProvider };

