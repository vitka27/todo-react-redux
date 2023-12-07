import { createSlice } from "@reduxjs/toolkit";

const todoSlise = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      if (action.payload.value.length) {
        state.todos.push({
          id: new Date().toISOString(),
          title: action.payload.value,
          completed: false,
        });
      }
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((item) => item.id !== action.payload.id);
    },
    completedTodo(state, action) {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export const { addTodo, completedTodo, deleteTodo } = todoSlise.actions;

export default todoSlise.reducer;
