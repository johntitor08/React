import { useState } from "react";
import "./App.css";
import CreateToDo from "./assets/components/CreateToDo";
import ToDoList from "./assets/components/ToDoList";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const createToDo = (newToDo) => {
    setToDoList([...toDoList, newToDo]);
  };

  const editToDo = (updatedToDo) => {
    setToDoList(
      toDoList.map((item) => (item.id === updatedToDo.id ? updatedToDo : item))
    );
  };

  const deleteToDo = (id) => {
    setToDoList(toDoList.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <CreateToDo onCreateToDo={createToDo} />
      <ToDoList toDoList={toDoList} onEdit={editToDo} onDelete={deleteToDo} />
    </div>
  );
}

export default App;
