import React from "react";

function useLocalStorage(itemName, initialValue) {
  //usamos la palabra use como convención
  const localStorageItem = localStorage.getItem(itemName); // obtenemos los datos de local storage

  let parsedItem;

  if (!localStorageItem) {
    //comprobamos si local storage tiene o no elementos guardados
    localStorage.setItem("TODOS_V1", JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem); //nuestro custom hook no solo va
  //a funcionar para guardar todos, sino también items

  const saveItem = (newItem) => {
    //función para hacer un cambio en el array
    // guardado en localStorage
    localStorage.setItem("TODOS_V1", JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem]; //retornamos la función que guarda el item en caso de que
  //este se haya modificado
}

export { useLocalStorage };