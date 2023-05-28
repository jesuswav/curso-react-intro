function TodoCounter({ total, completed }) {
  if (total === 0) {
    return (
      <h1 className="TodoCounter">
        Cargando Todos..
      </h1>
    );
  } else if (total === completed) {
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