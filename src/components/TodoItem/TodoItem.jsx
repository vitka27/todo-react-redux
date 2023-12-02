import { useState, useEffect } from "react";

function TodoItem({ item, handleDelete, handleCompleted }) {
  const [completed, setCompleted] = useState(item.completed || false);

  const onChangeCompleted = () => {
    setCompleted(!completed);
    handleCompleted();
  };

  return (
    <li
      className={
        completed
          ? "list-group-item d-flex justify-content-between align-items-center text-decoration-line-through"
          : "list-group-item d-flex justify-content-between align-items-center"
      }
    >
      <input
        onChange={onChangeCompleted}
        checked={completed}
        className="form-check-input m-2"
        name=""
        id=""
        type="checkbox"
        aria-label="Text for screen reader"
      />
      {item.title || ""}
      <button
        onClick={() => handleDelete(item.id)}
        className="btn"
        type="button"
      >
        <i className="bi bi-trash "></i>
      </button>
    </li>
  );
}

export default TodoItem;
