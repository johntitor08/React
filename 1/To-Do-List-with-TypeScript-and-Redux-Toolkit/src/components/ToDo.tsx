import React, { useState } from "react";
import "../App.css";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import type { ToDoType } from "../types/ToDoType";
import { useDispatch } from "react-redux";
import { removeToDoById, updateToDo } from "../redux/toDoSlice";

interface ToDo {
  toDo: ToDoType;
}

function ToDo({ toDo }: ToDo) {
  const { id, content } = toDo;
  const dispatch = useDispatch();
  const [editable, setEditable] = useState<boolean>(false);
  const [newToDo, setNewToDo] = useState<string>(content);
  const handleRemoveToDo = () => {
    dispatch(removeToDoById(id));
  };
  const handleUpdateToDo = () => {
    const payload = {
      id,
      content: newToDo,
    };
    dispatch(updateToDo(payload));
    setEditable(false);
  };

  return (
    <div className="to-do-item">
      {editable ? (
        <input
          id="to-do-item-input"
          type="text"
          value={newToDo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewToDo(e.target.value)
          }
          className="to-do-item-input"
        />
      ) : (
        <p key={id} className="to-do-item-text">
          {content}
        </p>
      )}

      <div className="icon">
        {editable ? (
          <FaCheckCircle
            onClick={handleUpdateToDo}
            className="icon-item"
          ></FaCheckCircle>
        ) : (
          <FaRegEdit
            onClick={() => setEditable(true)}
            className="icon-item"
          ></FaRegEdit>
        )}
        <IoIosRemoveCircleOutline
          onClick={handleRemoveToDo}
          className="icon-item"
        ></IoIosRemoveCircleOutline>
      </div>
    </div>
  );
}

export default ToDo;
