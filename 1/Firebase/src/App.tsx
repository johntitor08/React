import RouterConfig from "./routes/RouterConfig";
import Navbar from "./components/Navbar";
import "./App.css";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Navbar />
      <RouterConfig />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
