import { createContext, Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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
export const audioContext = createContext<any>(true);

function App() {
  const [rotation, setRotation] = useState(1);
  const [mute, setMute] = useState(true);
  const aboutAudio = new Audio("/audio/home_chord.flac");
  const projectsAudio = new Audio("/audio/about_chord.flac");
  const contactAudio = new Audio("/audio/projects_chord.flac");
  const homeAudio = new Audio("/audio/contact_chord.flac");
  const location = window.location.pathname;

  useEffect(() => {
    if (!mute) {
      if (location.includes("about-me")) {
        aboutAudio.play();
      }
      if (location.includes("projects")) {
        projectsAudio.play();
      }
      if (location.includes("contact")) {
        contactAudio.play();
      }
      if (location.includes("home")) {
        homeAudio.play();
      }
    }
  }, [location]);

  return (
    <>
      <bgContext.Provider value={{ rotation, setRotation }}>
        <div className="grid grid-cols-12 gap-4 w-full min-h-screen auto-rows-min content-between">
          <div className="sr-only" id="skip-navbar">
            <a href="#main-content">Skip navigation and go to main content</a>
          </div>
          <BrowserRouter>
            <Navbar />
            <Suspense
              fallback={
                <progress className="progress progress-primary w-full fixed bottom-0"></progress>
              }
            >
              <Routes>
                <Route path="*" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/about-me" element={<AboutMePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
            <audioContext.Provider value={{ mute, setMute }}>
              <AudioPopUp />

              <Footer />
            </audioContext.Provider>
          </BrowserRouter>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <BackgroundCanvas />
        </Suspense>
      </bgContext.Provider>
    </>
  );
}

export default App;
