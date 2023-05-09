import './';

function TodoCounter({ total, completed }) {
  return (
    <h1>
      Haz completado {completed} de {total} ToDo´s
    </h1>
  );
}

export { TodoCounter };