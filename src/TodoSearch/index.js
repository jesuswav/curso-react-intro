import React from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch() {

  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);

  return (
    <input 
      placeholder="Cortar cebolla" 
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value); //actualizar el valor del input
      }}
    />
  );
}

export { TodoSearch };
