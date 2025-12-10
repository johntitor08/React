import { useEffect, useState } from "react";
import { auth } from "../firebase";

export default function Profile() {
  const [user, setUser] = useState(auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Profile</h1>
      <p>
        <strong>Name:</strong> {user.displayName || "Anonymous"}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      {user.photoURL && (
        <img
          src={user.photoURL}
          alt="avatar"
          style={{ width: "120px", borderRadius: "50%", marginTop: "10px" }}
        />
      )}
    </div>
  );
}
