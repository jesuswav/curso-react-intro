import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { TodosLoading } from "../TodosLoading";
import { TodosError } from "../TodosError";
import { EmtyTodos } from "../EmtyTodos";
import { CreateTodoButton } from "../TodoButton";
import { TodoContext } from "../TodoContext";

function AppUI() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoContext.Consumer>
        {({
          loading,
          error,
          searchedTodos,
          completeTodo,
          deleteTodo,
        }) => (
          <TodoList>
            {loading && <TodosLoading />}
            {console.log('loading' + loading)}
            {error && <TodosError />}
            {!loading && searchedTodos.length === 0 && <EmtyTodos />}
            {console.log('Todos buscados ' + searchedTodos)}

            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
        )}
      </TodoContext.Consumer>

      <CreateTodoButton />
    </>
  );
}
export { AppUI };
