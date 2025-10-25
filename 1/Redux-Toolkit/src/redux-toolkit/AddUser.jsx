import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserAsync } from "./userSlice";

function AddUser() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    const newUser = {
      name,
      email,
      phone: "N/A",
      website: "N/A",
    };

    dispatch(addUserAsync(newUser));

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h3>Add New User</h3>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />
      <button type="submit" style={{ padding: "5px 10px" }}>
        Add
      </button>
    </form>
  );
}

export default AddUser;
