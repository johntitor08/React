import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created successfully!");
      navigate("/");
    } catch (error: unknown) {
      if (error instanceof Error) toast.error(error.message);
      else toast.error("Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Signed up with Google!");
      navigate("/");
    } catch (err: unknown) {
      if (err instanceof Error) toast.error(err.message);
      else toast.error("Google signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleRegister}>
        <h2>Register</h2>
        <input
          type="email"
          placeholder="Email"
          className="auth-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        <input
          type="password"
          placeholder="Password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={loading}
        />

        <div className="button-row">
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? "Creating account..." : "Register"}
          </button>
          <button
            type="button"
            className="auth-btn google-btn"
            onClick={handleGoogleSignUp}
            disabled={loading}
          >
            {loading ? "Loading..." : "Google"}
          </button>
        </div>
      </form>
    </div>
  );
}
