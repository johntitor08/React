import React from "react";
import UserForm from "./components/UserForm";
import AdvancedForm from "./components/AdvancedForm";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <UserForm />
      <AdvancedForm />
    </div>
  );
};

export default App;
