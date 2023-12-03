import { useState, useEffect } from "react";
import AddInput from "../AddInput/AddInput";
import TodoItem from "../TodoItem/TodoItem";

function TodoList() {
  const [todoList, setTodoList] = useState([]);

  const onSubmit = (value) => {
    console.log(value.length);
    if (value.length) {
      setTodoList([
        { id: new Date().toISOString(), title: value, completed: false },
        ...todoList,
      ]);
    }
  };

  const handleDelete = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const handleCompleted = (id) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const getList = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?&_limit=10"
    );
    const list = await response.json();
    setTodoList(list);
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="wrapper container justify-content-center d-flex align-items-center flex-md-column w-50 ">
      <h3 className=" pb-4">Список дел</h3>
      <ul className="list-group h-auto w-75">
        <AddInput onSubmit={onSubmit} />
        {todoList.map((todo, id) => (
          <TodoItem
            key={id}
            todo={todo}
            handleDelete={handleDelete}
            handleCompleted={handleCompleted}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
