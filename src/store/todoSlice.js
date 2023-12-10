import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?&_limit=8"
      );
      if (!response.ok) {
        throw new Error("ошибка при получении списка");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const addTodos = createAsyncThunk(
  "todos/addTodos",
  async (todoText, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(),
        }
      );

      if (!response.ok) {
        throw new Error("ошибка при добавлении todo");
      }

      dispatch(addTodo(todoText));

      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todoCompleted = createAsyncThunk(
  "todos/todoCompleted",
  async (todoID, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(),
        }
      );
      if (!response.ok) {
        throw new Error("ошибка при устаноки статуса исполненно");
      }

      const result = await response.json();
      dispatch(completedTodo(todoID));
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const delTodo = createAsyncThunk(
  "todos/delTodo",
  async (todoID, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/1`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("ошибка при удалении");
      }
      dispatch(deleteTodo({ id: todoID }));
      const result = await response.status;
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const todoSlise = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      if (action.payload.value.length) {
        state.todos.push({
          id: state.todos.length,
          title: action.payload.value,
          completed: false,
        });
        console.log(state.todos.length);
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
  extraReducers: {
    [fetchTodos.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.todos = action.payload;
    },
    [fetchTodos.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

const { addTodo, completedTodo, deleteTodo } = todoSlise.actions;

export const actions = { fetchTodos, addTodos, todoCompleted, delTodo };
export default todoSlise.reducer;
