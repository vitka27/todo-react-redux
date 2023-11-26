import { useState } from "react";
import AddInput from "../AddInput/AddInput";
import TodoItem from "../TodoItem/TodoItem";

function TodoList() {

  const [todoList, settodoList] = useState([]);

  return (
    <div className="wrapper container justify-content-center d-flex align-items-center flex-md-column w-25 ">
      <h3 className=" pb-4">Список дел</h3>
      <ul className="list-group h-auto w-75">
        <AddInput/>
        <TodoItem />
      </ul>
    </div>
  );
}

export default TodoList;
