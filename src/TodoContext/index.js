import React from "react";
import { useLocalStorage } from "./useLocalStorage";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true, category: "Deportes" },
//   { text: "Tomar curso de React", completed: false, category: "Casa" },
//   { text: "Lorar con la Llorona", completed: true, category: "Cocina" },
//   { text: "Otra cosa", completed: false, category: "Trabajo" },
//   { text: "Otra cosa 2", completed: false, category: "Journaling" },
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
  const [searchCategory, setSearchCategory] = React.useState('');

  // estados derivados
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    //buscar todos
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  // buscar categorias
  const searchedCategories = todos.filter((todo) => {
    const todoCategory = todo.category.toLowerCase();
    console.log('categoria: --- ' + searchCategory);
    const searchCategoryValue = searchCategory.toLowerCase();
    return todoCategory.includes(searchCategoryValue);
  })

  // añadir nuevos TODOS
  const addTodo = (text, category) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
      category,
    });
    console.log('categoria' + category);
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
        searchedCategories,
        searchCategory,
        setSearchCategory,
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

