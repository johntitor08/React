import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { ToDoInitialState, ToDoType } from "../types/ToDoType";

const initialState: ToDoInitialState = {
  toDoList: [],
};

export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    createToDo: (state: ToDoInitialState, action: PayloadAction<ToDoType>) => {
      state.toDoList = [...state.toDoList, action.payload];
    },
    removeToDoById: (
      state: ToDoInitialState,
      action: PayloadAction<number>
    ) => {
      state.toDoList = [
        ...state.toDoList.filter(
          (toDo: ToDoType) => toDo.id !== action.payload
        ),
      ];
    },
    updateToDo: (state: ToDoInitialState, action: PayloadAction<ToDoType>) => {
      state.toDoList = [
        ...state.toDoList.map((toDo: ToDoType) =>
          toDo.id !== action.payload.id ? toDo : action.payload
        ),
      ];
    },
  },
});

export const { createToDo, removeToDoById, updateToDo } = toDoSlice.actions;
export default toDoSlice.reducer;
