import React from "react";
import "./TodoCategory.css";

function TodoCategory(props) {
  return (
    <div className="TodoCategoryDiv">
      <div className="TodoCategoryFilterDiv">
        <label>Categoria:</label>
        <label>Deportes</label>
      </div>
      <select>
        <option>Categoria</option>
        <option>Deportes</option>
        <option>Journaling</option>
        <option>Cocina</option>
        <option>Casa</option>
        <option>Universidad</option>
      </select>
      {/* <li className="TodoCategory">
        
        <Category 
          completed={props.completed}
          category={props.completed}
        />
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <DeleteIcon 
          onDelete={props.onDelete}
        />
      </li> */}
    </div>
  );
}

export { TodoCategory };
