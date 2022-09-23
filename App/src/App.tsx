import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import AboutMePage from "./pages/about/AboutMePage";
import HomePage from "./pages/home/HomePage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="grid grid-cols-12 gap-4 w-full grid-rows-4">
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about-me" element={<AboutMePage />} />
        <Route path="/projects" element={<HomePage />} />
        <Route path="/contact" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
