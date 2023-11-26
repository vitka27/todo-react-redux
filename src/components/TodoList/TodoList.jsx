import TodoItem from "../TodoItem/TodoItem";


function TodoList() {
  return (
    <div className="wrapper container justify-content-center d-flex align-items-center flex-md-column w-25 ">
      <h3 className=" pb-4">Список дел</h3>
      <ul className="list-group h-auto w-75">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ul>
      <button className=" mt-3 btn btn-secondary w-25 " type="button">
        Добавить
      </button>
    </div>
  );
}

export default TodoList