import PropTypes from "prop-types";
import { useState } from "react";
import useActions from "../../hooks/useActions";

function TodoItem({ todo }) {
  const { delTodo, toggleStatus } = useActions();
  const [completed, setCompleted] = useState(false);

  const onChangeDelete = () => {
    delTodo({ id: todo.id });
  };

  const onChangeCompleted = () => {
    setCompleted(!completed);
    toggleStatus({ id: todo.id });
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

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default TodoItem;
