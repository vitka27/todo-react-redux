import { useState, useEffect } from "react";
import AddInput from "../AddInput/AddInput";
import TodoItem from "../TodoItem/TodoItem";

function TodoList() {
  const [todoList, settodoList] = useState([]);

  const getList = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const list = await response.json();
    settodoList(list);
    console.log(list);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="wrapper container justify-content-center d-flex align-items-center flex-md-column w-25 ">
      <h3 className=" pb-4">Список дел</h3>
      <ul className="list-group h-auto w-75">
        <AddInput />
        {todoList.map((item, id) => (
          <TodoItem key={id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
