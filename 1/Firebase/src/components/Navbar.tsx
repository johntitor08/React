import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { auth } from "../firebase";
import toast from "react-hot-toast";
import "../App.css";
import Avatar from "../assets/225-default-avatar.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loadingLogout, setLoadingLogout] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    setLoadingLogout(true);
    try {
      await signOut(auth);
      toast.success("Logout successful!");
      navigate("/login");
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Logout failed");
      }
    } finally {
      setLoadingLogout(false);
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Firebase Auth App
      </Link>

      <button className="navbar-toggle" onClick={() => setOpen(!open)}>
        <span className={open ? "line line1 open" : "line line1"}></span>
        <span className={open ? "line line2 open" : "line line2"}></span>
        <span className={open ? "line line3 open" : "line line3"}></span>
      </button>

      <div className={open ? "navbar-menu open" : "navbar-menu"}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "navbar-item active" : "navbar-item"
          }
          onClick={() => setOpen(false)}
        >
          Home
        </NavLink>

        {!user && (
          <>
            <NavLink
              to="/login"
              className="navbar-item"
              onClick={() => setOpen(false)}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="navbar-item"
              onClick={() => setOpen(false)}
            >
              Register
            </NavLink>
          </>
        )}

        {user && (
          <div className="avatar-container">
            <img
              src={user.photoURL || Avatar}
              alt="avatar"
              className="avatar"
              onClick={() => setMenuOpen(!menuOpen)}
            />
            {menuOpen && (
              <div className="avatar-menu">
                <NavLink
                  to="/profile"
                  className="avatar-menu-item"
                  onClick={() => setMenuOpen(false)}
                >
                  Profile
                </NavLink>
                <NavLink
                  to="/settings"
                  className="avatar-menu-item"
                  onClick={() => setMenuOpen(false)}
                >
                  Settings
                </NavLink>
                <button
                  className="avatar-menu-item logout-btn"
                  onClick={handleLogout}
                  disabled={loadingLogout}
                >
                  {loadingLogout ? "Logging out..." : "Logout"}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
