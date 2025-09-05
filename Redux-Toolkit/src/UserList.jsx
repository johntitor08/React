import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./redux-toolkit/userSlice";
import User from "./redux-toolkit/User";
import AddUser from "./redux-toolkit/AddUser";

function UserList() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>User List</h2>

      {/* Yeni kullanıcı ekleme formu */}
      <AddUser />

      {/* Loading spinner */}
      {loading && (
        <div style={{ textAlign: "center", margin: "20px 0" }}>
          <div className="spinner"></div>
        </div>
      )}

      {/* Hata mesajı */}
      {error && (
        <p style={{ color: "red", textAlign: "center" }}>Error: {error}</p>
      )}

      {/* Kullanıcı listesi grid */}
      {!loading && users.length === 0 && (
        <p style={{ textAlign: "center" }}>No users found.</p>
      )}

      <div className="user-grid">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default UserList;
