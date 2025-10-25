import React, { useState } from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";

function ToDo({ toDo, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(toDo.title);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedTitle.trim() !== "") {
      onEdit({ ...toDo, title: editedTitle });
      setIsEditing(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  return (
    <div className="to-do-item">
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          onBlur={handleSave}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <p>{toDo.title}</p>
      )}

      <div>
        <FaRegEdit
          className="edit-to-do"
          onClick={handleEdit}
          style={{ cursor: "pointer", marginRight: "0.5rem" }}
        />
        <IoIosRemoveCircleOutline
          className="remove-to-do"
          onClick={() => onDelete(toDo.id)}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}

export default ToDo;
