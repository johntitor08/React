import React from "react";
import ToDo from "./ToDo";

function ToDoList({ toDoList, onEdit, onDelete }) {
  return (
    <div className="to-do-list">
      {toDoList.map((toDo) => (
        <ToDo key={toDo.id} toDo={toDo} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ToDoList;
