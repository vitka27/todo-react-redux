function AddInput({ setValue, onSubmit }) {
  //! имеет смысл переделать на форму
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <input
        type="text"
        onChange={(event) => setValue(event.target.value)}
        className="form-control"
      />
      <button onClick={ (event) => onSubmit(event)} className="btn" type="button">
        <span className="bi bi-plus-square-dotted"></span>
      </button>
    </li>
  );
}

export default AddInput;
