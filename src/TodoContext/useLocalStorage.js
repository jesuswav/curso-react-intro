import React from "react";

//usamos la palabra use como convención
function useLocalStorage(itemName, initialValue) {
  console.log("ejecutando localStorage");

  const [item, setItem] = React.useState(initialValue); //nuestro custom hook no solo va
  //a funcionar para guardar todos, sino también items
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  console.log('Porque no funciona')
  React.useEffect(() => {
    console.log("ejecutando useEffect ...................");
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName); // obtenemos los datos de local storage

        let parsedItem;

        if (!localStorageItem) {
          //comprobamos si local storage tiene o no elementos guardados
          localStorage.setItem("TODOS_V1", JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false); //actualizamos el estado de loading
      } catch (error) {
        setError(false);
        setError(true); //actualizamos el estado de error que creamos
      }
    }, 2000);
  }, []);

  //función para hacer un cambio en el array
  // guardado en localStorage
  const saveItem = (newItem) => {
    console.log("ejecutando save item");
    localStorage.setItem("TODOS_V1", JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  }; //retornamos la función que guarda el item en caso de que
  //este se haya modificado
}

export { useLocalStorage };

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: true },
//   { text: "Tomar curso de React", completed: false },
//   { text: "Lorar con la Llorona", completed: true },
//   { text: "Otra cosa", completed: false },
//   { text: "Otra cosa 2", completed: false },
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
// localStorage.removeItem("TODOS_V1");
