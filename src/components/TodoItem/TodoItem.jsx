import { useState } from "react";
import { useDispatch } from "react-redux";
import { completedTodo, deleteTodo } from "../../store/todoSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [completed, setCompleted] = useState(false);

  const onChangeDelete = () => {
    dispatch(deleteTodo({ id: todo.id }));
  };

  const onChangeCompleted = () => {
    setCompleted(!completed);
    dispatch(completedTodo({ id: todo.id }));
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
      <button onClick={onChangeDelete} className="btn" type="button">
        <i className="bi bi-trash "></i>
      </button>
    </li>
  );
}

export default TodoItem;
