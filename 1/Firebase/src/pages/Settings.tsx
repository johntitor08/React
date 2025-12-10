import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { updateProfile } from "firebase/auth";

export default function Settings() {
  const [user, setUser] = useState(auth.currentUser);
  const [displayName, setDisplayName] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      if (currentUser?.displayName) setDisplayName(currentUser.displayName);
    });
    return () => unsubscribe();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  const handleUpdateProfile = async () => {
    if (user) {
      try {
        await updateProfile(user, { displayName });
        alert("Profile updated!");
      } catch (err) {
        console.error(err);
        alert("Update failed");
      }
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Settings</h1>
      <div style={{ marginBottom: "15px" }}>
        <label>
          Display Name:{" "}
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
}
