import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "40px", fontSize: "22px" }}>
      <h1>Welcome to the Home Page</h1>
      <p>
        Please <Link to="/login">Login</Link> or{" "}
        <Link to="/register">Register</Link>.
      </p>
    </div>
  );
}

export default Home;
