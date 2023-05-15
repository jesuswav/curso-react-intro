import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './DeleteIcon'

function TodoItem(props) {
  return (
    <div className="TodoListDiv">
      <li className="TodoItem">
        <CompleteIcon />
        {/* <span className={
          `Icon Icon-check ${props.completed && 
          "Icon-check--active"}`}
          onClick={props.onComplete}
        >
          V
        </span> */}
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <DeleteIcon />
        {/* <span
          className={`Icon Icon-delete`}
          onClick={props.onDelete}
        >
          X
        </span> */}
      </li>
    </div>
  );
}

export { TodoItem };
