import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import AboutCompany from "./pages/AboutCompany";
import AboutEmployee from "./pages/AboutEmployee";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="company" element={<AboutCompany />} />
          <Route path="employee" element={<AboutEmployee />} />
          <Route index element={<div>Please select an option</div>} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
