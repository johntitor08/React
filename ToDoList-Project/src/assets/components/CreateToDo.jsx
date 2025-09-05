import React, { useState } from "react";

function CreateToDo({ onCreateToDo }) {
  const [newToDo, setNewToDo] = useState("");

  const createToDo = () => {
    if (newToDo.trim() === "") {
      alert("Lütfen bir to do giriniz.");
      return;
    }

    const request = {
      id: Date.now(),
      title: newToDo,
      completed: false,
    };

    onCreateToDo(request);
    setNewToDo("");
  };

  return (
    <div className="create-to-do">
      <input
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
        id="to-do-input"
        className="to-do-input"
        type="text"
        placeholder="To do giriniz."
      />
      <button onClick={createToDo} className="to-do-button">
        Oluştur
      </button>
    </div>
  );
}

export default CreateToDo;
