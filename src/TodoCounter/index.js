import React from "react";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  if (totalTodos === 0) {
    return (
      <h1 className="TodoCounter">
        Cargando Todos..
      </h1>
    );
  } else if (totalTodos === completedTodos) {
    return (
      <h1 className="TodoCounter">
        Felicidades!! haz completado TODOS los ToDo´s
    </h1>
    );
  } else {
    return (
      <h1 className="TodoCounter">
        Haz completado {completedTodos} de {totalTodos} ToDo´s
      </h1>
    );
  }
}

export { TodoCounter };