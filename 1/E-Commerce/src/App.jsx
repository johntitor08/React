import React, { useState } from "react";
import Header from "./components/Header";
import PageContainer from "./container/PageContainer";
import RouterConfig from "./config/RouterConfig";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark");
  };

  return (
    <PageContainer>
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />
      <RouterConfig darkMode={darkMode} />
    </PageContainer>
  );
}

export default App;
