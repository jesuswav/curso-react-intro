function TodoCounter({ total, completed }) {
  return (
    <h1 className="TodoCounter">
      Haz completado {completed} de {total} ToDo´s
    </h1>
  );
}

export { TodoCounter };