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
  async (todoText, { rejectWithValue, dispatch, getState }) => {
    try {
      const fakeTodo = {
        id: getState().todos.todos.length + 1,
        title: todoText.value,
        completed: false,
      };
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(fakeTodo),
        }
      );

      if (!response.ok) {
        throw new Error("ошибка при добавлении todo");
      }

      const result = await response.json();
      console.log(result);
      dispatch(addTodo(fakeTodo));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const toggleStatus = createAsyncThunk(
  "todos/todoCompleted",
  async (todo, { rejectWithValue, dispatch, getState }) => {
    const findTodo = getState().todos.todos.find(
      (element) => element.id === todo.id
    );

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            completed: !findTodo.completed,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("ошибка при устаноки статуса исполненно");
      }
      dispatch(completedTodo(todo));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const delTodo = createAsyncThunk(
  "todos/delTodo",
  async (todo, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("ошибка при удалении");
      }
      dispatch(deleteTodo(todo));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const errorHandling = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const todoSlise = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    status: null,
    error: null,
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push(action.payload);
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
    [fetchTodos.rejected]: errorHandling,
    [addTodos.rejected]: errorHandling,
    [toggleStatus.rejected]: errorHandling,
    [delTodo.rejected]: errorHandling,
  },
});

const { addTodo, completedTodo, deleteTodo } = todoSlise.actions;

export const actions = { fetchTodos, addTodos, toggleStatus, delTodo };
export default todoSlise.reducer;
