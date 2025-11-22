export interface ToDoInitialState {
  toDoList: ToDoType[];
}

export interface ToDoType {
  id: number;
  content: string;
}
