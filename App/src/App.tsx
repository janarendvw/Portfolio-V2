import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./layout/footer/Footer";
import Navbar from "./layout/Navbar";
import AboutMePage from "./pages/about/AboutMePage";
import ContactPage from "./pages/contact/ContactPage";
import HomePage from "./pages/home/HomePage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { EffectComposer } from "@react-three/postprocessing";
import { MeshDistortMaterial } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

function App() {
  const texture = useLoader(TextureLoader, "/images/circle1.png");
  return (
    <>
      <div className="grid grid-cols-12 gap-4 w-full h-screen auto-rows-auto">
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
      <div
        id="canvas-container"
        className="fixed block top-0 min-h-full -z-10 "
      >
        <Canvas
          performance={{ min: 0.5 }}
          style={{ width: "100vw", height: "100vh", zIndex: "-1" }}
        >
          <fog attach="fog" args={["#000000", 0, 10]} />
          <OrbitControls autoRotate={true} autoRotateSpeed={0.1} />
          <pointLight position={[4, 10, -2]} color={"blue"} intensity={5} />
          <pointLight
            position={[0, -10, -6]}
            color={"purple"}
            intensity={3.5}
          />
          <mesh>
            <torusKnotGeometry args={[10,3]} />
            <meshPhongMaterial wireframe refractionRatio={1} shininess={100} reflectivity={1} />
          </mesh>
        </Canvas>
      </div>
    </>
  );
}

export default App;
