import React from "react";
import { useDispatch } from "react-redux";
import { removeUserAsync } from "./userSlice";

function User({ user }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    if (window.confirm(`Are you sure you want to remove ${user.name}?`)) {
      dispatch(removeUserAsync(user.id));
    }
  };

  return (
    <div
      className="user-card"
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "10px",
        margin: "5px 0",
      }}
    >
      <h3>{user.name}</h3>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
      <button
        onClick={handleRemove}
        style={{
          marginTop: "10px",
          padding: "5px 10px",
          background: "red",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default User;
