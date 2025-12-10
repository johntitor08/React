import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { updateProfile, type User } from "firebase/auth";
import toast from "react-hot-toast";
import "../App.css";

export default function Settings() {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);

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
    if (!user) return;
    setLoading(true);
    try {
      await updateProfile(user, { displayName });
      toast.success("Profile updated!");
    } catch (err: unknown) {
      console.error(err);
      if (err instanceof Error) toast.error(err.message);
      else toast.error("Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <label>Display Name</label>
      <input
        type="text"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        disabled={loading}
      />
      <button onClick={handleUpdateProfile} disabled={loading}>
        {loading ? "Updating..." : "Update Profile"}
      </button>
    </div>
  );
}
