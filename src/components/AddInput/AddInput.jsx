import { useState } from "react";

function AddInput({ onSubmit }) {
  //! имеет смысл переделать на форму
  //!
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
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
