
function TodoItem() {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      List item
      <button className="btn" type="button">
        <i className="bi bi-trash "></i>
      </button>
    </li>
  );
}

export default TodoItem;
