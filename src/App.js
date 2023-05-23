import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./TodoButton";

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar curso de React", completed: false },
//   { text: "Lorar con la Llorona", completed: true },
//   { text: "Otra cosa", completed: false },
//   { text: "Otra cosa 2", completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1')

function useLocalStorage(itemName, initialValue) { //usamos la palabra use como convención
  const localStorageItem = localStorage.getItem(itemName); // obtenemos los datos de local storage

  let parsedItem;

  if (!localStorageItem) { //comprobamos si local storage tiene o no elementos guardados
    localStorage.setItem('TODOS_V1', JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem); //nuestro custom hook no solo va
  //a funcionar para guardar todos, sino también items

  const saveItem = (newItem) => {  //función para hacer un cambio en el array 
    // guardado en localStorage
    localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem]; //retornamos la función que guarda el item en caso de que
  //este se haya modificado
}

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []); // estado
  // ahora podemos llamar a nuestro custom hook en lugar de el actualizador de react
  const [searchValue, setSearchValue] = React.useState("");

  // estados derivados
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => { //buscar todos
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
    <>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {searchedTodos.map((todo) => ( // renderizamos el nuevo array con los valores actuales
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)} //completar todo
            onDelete={() => deleteTodo(todo.text)}     //borrar un todo
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );

}

export default App;
