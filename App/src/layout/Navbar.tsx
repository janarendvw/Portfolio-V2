import React, { useEffect, useState } from "react";
import { Mail, MessageCircle } from "react-feather";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";
type Props = {};

export default function Navbar({}: Props) {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);

  return (
    <div
      id="navbar"
      className="flex col-start-2 col-span-10 justify-between mt-8 items-center h-min"
    >
      <div className="font-bold text-3xl">STCKD</div>
      <span className="flex flex-col">
        <nav id="nav-links" className="flex gap-10 items-center">
          <span className={currentPath === "/" || currentPath === "/home" ? "active" : ""}>
            <Link to={"/home"}>Home</Link>
          </span>
          <span className={currentPath === "/about-me" ? "active" : ""}>
            <Link to={"/about-me"}>About Me</Link>
          </span>
          <span className={currentPath === "/projects" ? "active" : ""}>
            <Link to={"/projects"}>Projects</Link>
          </span>
          <Link to={"/contact"} className="btn btn-primary btn-sm gap-2">
            <MessageCircle size={16}/>
            Let's talk!
          </Link>
        </nav>
      </span>
    </div>
  );
}
