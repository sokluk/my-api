import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gray-800 text-white p-4 flex justify-center gap-6">
        <Link to="/" className="hover:text-yellow-300">
          Home
        </Link>
        <Link to="/about" className="hover:text-yellow-300">
          About
        </Link>
        <Link to="/contact" className="hover:text-yellow-300">
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
