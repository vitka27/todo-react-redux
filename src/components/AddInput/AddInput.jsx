function AddInput() {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <input type="text" className="form-control" />

      <button className="btn" type="button">
        <span className="bi bi-plus-square-dotted"></span>
      </button>
    </li>
  );
}

export default AddInput;
