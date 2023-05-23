function CreateTodoButton() {
  return (
    <button className="TodoButton" onClick={
      (event) => {
        console.log('click')
        console.log(event)
      }
    }>+</button>
  );
}

export { CreateTodoButton };
