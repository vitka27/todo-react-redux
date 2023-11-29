import { useState, useEffect } from "react";
import AddInput from "../AddInput/AddInput";
import TodoItem from "../TodoItem/TodoItem";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [value, setValue] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("submit");
    setTodoList([...todoList, { title: value, completed: false }]);
  };

  const handleDelete = (title) => {
    console.log(title, "Del");
    event.preventDefault();
    setTodoList(todoList.filter((item) => item.title !== title));
  };

  const getList = async () => {
    console.log("fetch list");
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const list = await response.json();
    setTodoList(list);
    console.log(list);
  };

  // useEffect(() => {
  //   getList();
  // }, []);

  return (
    <div className="wrapper container justify-content-center d-flex align-items-center flex-md-column w-50 ">
      <h3 className=" pb-4">Список дел</h3>
      <ul className="list-group h-auto w-75">
        <AddInput setValue={setValue} onSubmit={onSubmit} />
        {todoList.map((item, id) => (
          <TodoItem key={id} item={item} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
