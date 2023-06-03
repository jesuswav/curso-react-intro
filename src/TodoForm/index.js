import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  // estado local para guardar el valor de el nuevo TODO
  const [newTodoValue, setNewTodoValue] = React.useState('');

  function onSubmit(event) {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  function onCancel(event) {
    setOpenModal(false);
  }

  function onChange(event) {
    setNewTodoValue(event.target.value);
  }

  return (
    <form onSubmit={onSubmit} id="form-container">
      <label>Escribe tu nuevo TODO</label>
      <textarea placeholder="Cortar cebolla para el almuerzo" 
        value={newTodoValue} onChange={onChange} />
      <div className="TodoForm-buttonContainer">
        <button 
          type="button" onClick={onCancel} 
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
