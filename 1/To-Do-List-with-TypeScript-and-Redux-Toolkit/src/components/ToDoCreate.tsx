import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createToDo } from "../redux/toDoSlice";
import type { ToDoType } from "../types/ToDoType";

function ToDoCreate() {
  const dispatch = useDispatch();
  const [newToDo, setNewToDo] = useState<string>("");
  const handleCreateToDo = () => {
    if (newToDo.trim().length == 0) {
      alert("To do giriniz.");
      return;
    }

    const payload: ToDoType = {
      id: Math.floor(Math.random() * 999999),
      content: newToDo,
    };

    dispatch(createToDo(payload));
    setNewToDo("");
  };

  return (
    <div className="to-do-create">
      <h1>To Do List</h1>
      <input
        id="to-do-input"
        type="text"
        value={newToDo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewToDo(e.target.value)
        }
        className="to-do-input"
      />
      <button onClick={handleCreateToDo} className="to-do-create-btn">
        Create
      </button>
    </div>
  );
}

export default ToDoCreate;
