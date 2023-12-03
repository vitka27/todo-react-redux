import { useState, useEffect } from "react";

function TodoItem({ todo, handleDelete, handleCompleted }) {
  const [completed, setCompleted] = useState(false);

  const onCangeDelete = () => {
    handleDelete(todo.id);
  };

  const onChangeCompleted = () => {
    setCompleted(!completed);
    handleCompleted(todo.id);
  };

  return (
    <li
      className={
        todo.completed
          ? "list-group-item d-flex justify-content-between align-items-center text-decoration-line-through"
          : "list-group-item d-flex justify-content-between align-items-center"
      }
    >
      <input
        onChange={onChangeCompleted}
        checked={todo.completed}
        className="form-check-input m-2"
        type="checkbox"
        aria-label="Text for screen reader"
      />
      {todo.title || ""}
      <button onClick={onCangeDelete} className="btn" type="button">
        <i className="bi bi-trash "></i>
      </button>
    </li>
  );
}

export default TodoItem;
