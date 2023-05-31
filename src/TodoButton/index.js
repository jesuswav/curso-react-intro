import React from "react";
import { TodoContext } from "../TodoContext";

function CreateTodoButton() {
  const {
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <button className="TodoButton" onClick={
      (event) => {
        setOpenModal(!openModal)
      }
    }>+</button>
  );
}

export { CreateTodoButton };
