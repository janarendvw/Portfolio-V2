import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./layout/footer/Footer";
import Navbar from "./layout/Navbar";
import AboutMePage from "./pages/about/AboutMePage";
import ContactPage from "./pages/contact/ContactPage";
import HomePage from "./pages/home/HomePage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import BackgroundCanvas from "./style/BackgroundCanvas";

export const bgContext = createContext<any>(1);

function App() {
  const [rotation, setRotation] = useState(1);
  return (
    <>
<bgContext.Provider value={{ rotation, setRotation }}>
      <div className="grid grid-cols-12 gap-4 w-full h-screen auto-rows-min content-between">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about-me" element={<AboutMePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
<BackgroundCanvas/>
</bgContext.Provider>
    </>
  );
}

export default App;
