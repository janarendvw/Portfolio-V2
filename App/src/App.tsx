import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import HomePage from "./pages/home/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid grid-cols-12 gap-4 w-full min-h-screen">
    <Navbar/>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/about-me" element={<HomePage />} />
        <Route path="/projects" element={<HomePage />} />
        <Route path="/contact" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
