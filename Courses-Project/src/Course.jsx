import React from "react";

function Course({ course }) {
  const { name, description, image, price, rating } = course;
  return (
    <div className="course-item">
      <div>
        <img src={image} alt="" width={250} height={150} />
        <h4 className="course-title">{name}</h4>
        <h5 className="course-description">{description}</h5>
        <h3>{price}</h3>
        <h3>{rating}</h3>
      </div>
    </div>
  );
}

export default Course;
