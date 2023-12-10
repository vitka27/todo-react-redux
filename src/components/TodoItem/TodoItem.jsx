import { useState } from "react";
import useActions from "../../hooks/useActions";

function TodoItem({ todo }) {
  const { delTodo, todoCompleted } = useActions();
  const [completed, setCompleted] = useState(false);

  const onChangeDelete = () => {
    delTodo(todo.id);
  };

  const onChangeCompleted = () => {
    setCompleted(!completed);
    todoCompleted({ id: todo.id });
  };

  return (
    <li
      className={`list-group-item d-flex justify-content-between align-items-center ${
        todo.completed ? "text-decoration-line-through text-danger" : ""
      }`}
    >
      <input
        onChange={onChangeCompleted}
        checked={todo.completed}
        className="form-check-input m-2"
        type="checkbox"
        aria-label="Text for screen reader"
      />
      {todo.title || ""}
      <button onClick={onChangeDelete} className="btn" type="button">
        <i className="bi bi-trash text-danger "></i>
      </button>
    </li>
  );
}

export default TodoItem;
