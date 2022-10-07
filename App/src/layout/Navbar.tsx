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
      className="flex col-start-2 col-span-10 justify-between mt-8 items-center h-min w-full"
    >
      <Link className="md:block hidden font-bold text-3xl focus-visible:outline rounded-box" to={"/home"}>
        STCKD
      </Link>
      <span className="flex md:flex-col md:w-auto w-full">
        <nav
          id="nav-links"
          className="flex gap-10 items-center w-full justify-evenly"
        >
          <Link
            className={
              currentPath === "/" || currentPath === "/home"
                ? "active focus-visible:outline rounded-box"
                : "focus-visible:outline rounded-box"
            }
            to={"/home"}
          >
            Home
          </Link>
          <Link
            className={
              currentPath === "/about-me"
                ? "active focus-visible:outline rounded-box"
                : "focus-visible:outline rounded-box"
            }
            to={"/about-me"}
          >
            About Me
          </Link>
          <Link
            className={
              currentPath === "/projects"
                ? "active focus-visible:outline rounded-box"
                : "focus-visible:outline rounded-box"
            }
            to={"/projects"}
          >
            Projects
          </Link>
          <Link to={"/contact"} className="btn btn-primary btn-sm gap-2">
            <MessageCircle size={16} />
            Let's talk!
          </Link>
        </nav>
      </span>
    </div>
  );
}
