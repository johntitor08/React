import React from "react";
import "./App.css";
import Header from "./Header";
import { courses } from "./Data";
import Course from "./Course";
import "./css/Course.css";

function App() {
  return (
    <div className="course-main">
      <Header />
      {courses?.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
}

export default App;
