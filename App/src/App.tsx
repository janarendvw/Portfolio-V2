import { createContext, Suspense, lazy, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AudioPopUp from "./layout/AudioPopUp";
import Footer from "./layout/footer/Footer";
import Navbar from "./layout/Navbar";

const HomePage = lazy(() => import("./pages/home/HomePage"));
const AboutMePage = lazy(() => import("./pages/about/AboutMePage"));
const ProjectsPage = lazy(() => import("./pages/projects/ProjectsPage"));
const ContactPage = lazy(() => import("./pages/contact/ContactPage"));
const BackgroundCanvas = lazy(() => import("./style/BackgroundCanvas"));
export const bgContext = createContext<any>(1);

function App() {
  const [rotation, setRotation] = useState(1);
  
  return (
    <>
    <AudioPopUp/>
<bgContext.Provider value={{ rotation, setRotation }}>
      <div className="grid grid-cols-12 gap-4 w-full min-h-screen auto-rows-min content-between">
        <div className="sr-only" id="skip-navbar">
          <a href="#main-content">Skip navigation and go to main content</a>
        </div>
        <BrowserRouter>
          <Navbar />
          <Suspense fallback={<progress className="progress progress-primary w-full fixed bottom-0"></progress>}>
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about-me" element={<AboutMePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
<BackgroundCanvas/>
</Suspense>
</bgContext.Provider>
    </>
  );
}

export default App;
