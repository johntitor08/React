import ToDo from "./ToDo";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import type { ToDoType } from "../types/ToDoType";

function ToDoList() {
  const { toDoList } = useSelector((state: RootState) => state.toDo);
  return (
    <div>
      {toDoList &&
        toDoList.map((toDo: ToDoType) => (
          <ToDo key={toDo.id} toDo={toDo}></ToDo>
        ))}
    </div>
  );
}

export default ToDoList;
