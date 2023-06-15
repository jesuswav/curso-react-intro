import React from "react";
import "./TodoCategory.css";
import { TodoContext } from "../TodoContext";

function TodoCategory() {
  // setear el search value
  const {
    searchCategory,
    setSearchCategory
  } = React.useContext(TodoContext);
  return (
    <div className="TodoCategoryDiv">
      <div className="TodoCategoryFilterDiv">
        <label>Categoria:</label>
        <label>{searchCategory}</label>
      </div>
      <select
        value={searchCategory}
        onChange={(event) => {
          setSearchCategory(event.target.value); //actualizar el valor a buscar
        }}
      >
        <option>Categoria</option>
        <option>Deportes</option>
        <option>Journaling</option>
        <option>Cocina</option>
        <option>Casa</option>
        <option>Universidad</option>
      </select>
    </div>
  );
}

export { TodoCategory };
