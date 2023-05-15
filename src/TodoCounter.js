function TodoCounter({ total, completed }) {
  if (total == completed) {
    return (
      <h1 className="TodoCounter">
        Felicidades!! haz completado TODOS los ToDo´s
    </h1>
    );
  } else {
    return (
      <h1 className="TodoCounter">
        Haz completado {completed} de {total} ToDo´s
      </h1>
    );
  }
}

export { TodoCounter };