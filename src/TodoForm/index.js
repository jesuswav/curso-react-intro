import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  // estado local para guardar el valor de el nuevo TODO
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const [newCategoryValue, setNewCategoryValue] = React.useState("");

  function onSubmit(event) {
    event.preventDefault();
    addTodo(newTodoValue, newCategoryValue);
    setOpenModal(false);
  }

  function onCancel(event) {
    setOpenModal(false);
  }

  function onChange(event) {
    setNewTodoValue(event.target.value);
  }
  function onChangeCategory(event) {
    setNewCategoryValue(event.target.value);
  }

  return (
    <form onSubmit={onSubmit} id="form-container">
      <label>Escribe tu nuevo TODO</label>
      <textarea
        placeholder="Cortar cebolla para el almuerzo"
        value={newTodoValue}
        onChange={onChange}
      />
      <select
        value={newCategoryValue}
        onChange={onChangeCategory}
      >
        <option>Categoria</option>
        <option>Deportes</option>
        <option>Journaling</option>
        <option>Cocina</option>
        <option>Casa</option>
        <option>Universidad</option>
      </select>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button className="TodoForm-button">Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };
