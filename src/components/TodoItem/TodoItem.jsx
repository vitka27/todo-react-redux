function TodoItem({ item, handleDelete }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {item.title}
      <button
        onClick={()=>handleDelete(item.title)}
        className="btn"
        type="button"
      >
        <i className="bi bi-trash "></i>
      </button>
    </li>
  );
}

export default TodoItem;
