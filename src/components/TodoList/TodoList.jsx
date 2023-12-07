import { useSelector } from "react-redux";
import AddInput from "../AddInput/AddInput";
import TodoItem from "../TodoItem/TodoItem";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);

  // const getList = async () => {
  //   const response = await fetch(
  //     "https://jsonplaceholder.typicode.com/todos?&_limit=10"
  //   );
  //   const list = await response.json();
  //   setTodoList(list);
  // };
  // useEffect(() => {
  //   getList();
  // }, []);

  return (
    <div className="wrapper container justify-content-center d-flex align-items-center flex-md-column w-50 ">
      <h3 className=" pb-4">Список дел</h3>
      <ul className="list-group h-auto w-75">
        <AddInput />
        {todos.map((todo, id) => (
          <TodoItem key={id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
