import { useEffect } from "react";
import "./App.css";
import TodoList from "../TodoList/TodoList";

function App() {
  const getList = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const list = await response.json()
    console.log(list);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <main className="bg-body-tertiary">
      <TodoList />
    </main>
  );
}

export default App;
