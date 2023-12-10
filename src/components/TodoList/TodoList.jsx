import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { actions } from "../../store/todoSlice";
import useActions from "../../hooks/useActions.js";

import AddInput from "../AddInput/AddInput";
import TodoItem from "../TodoItem/TodoItem";

function TodoList() {
  const { fetchTodos } = useActions();

  const { todos, status, error } = useSelector((state) => state.todos);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div className="wrapper container justify-content-center d-flex align-items-center flex-md-column w-50 ">
      <h3 className=" pb-4">Список дел</h3>
      <ul className="list-group h-auto w-75">
        {error ? (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        ) : (
          <>
            {status === "loading" ? (
              <div
                className="spinner-border text-warning container justify-content-center"
                role="status"
              >
                <span className="visually-hidden d-block ">Loading...</span>
              </div>
            ) : (
              <>
                <AddInput />
                {todos.map((todo, id) => (
                  <TodoItem key={id} todo={todo} />
                ))}
              </>
            )}
          </>
        )}
      </ul>
    </div>
  );
}

export default TodoList;
