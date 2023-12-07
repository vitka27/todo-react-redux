import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todoSlice";

function AddInput() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo({ value }));
    setValue("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="list-group-item d-flex justify-content-between align-items-center"
    >
      <input
        type="text"
        value={value || ""}
        onChange={(event) => setValue(event.target.value)}
        className="form-control"
      />
      <button type="submit" className="btn">
        <span className="bi bi-plus-square-dotted"></span>
      </button>
    </form>
  );
}

export default AddInput;
