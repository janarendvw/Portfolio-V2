import React from "react";
import { Link, useNavigate } from "react-router-dom";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div id="navbar" className="flex col-start-2 col-span-10 justify-between mt-8 items-center h-min">
      <div className="font-bold text-3xl">STCKD</div>
      <div id="nav-links" className="flex gap-10 items-center">
        <Link to={'/'}>Home</Link>
        <Link to={'/about-me'}>About Me</Link>
        <Link to={'/projects'}>Projects</Link>
        <Link to={'/contact'} className="btn btn-primary btn-sm">Contact</Link>
      </div>
    </div>
  );
}
