import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div id="navbar" className="flex col-start-2 col-span-10 justify-between mt-8 items-center h-min">
      <div className="font-bold text-3xl">STCKD</div>
      <div id="nav-links" className="flex gap-10 items-center">
        <a href="#">Home</a>
        <a href="#">About Me</a>
        <a href="#">Projects</a>
        <a href="#" className="btn btn-primary btn-sm">Contact</a>
      </div>
    </div>
  );
}
