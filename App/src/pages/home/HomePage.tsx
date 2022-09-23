import React from "react";
import { Link } from "react-router-dom";

type Props = {};

export default function HomePage({}: Props) {
  return (
    <div className="flex justify-between col-start-2 col-span-10 row-start-2">
      <div id="home-hero-left" className="w-1/4">
        <div className="text-6xl">YOU MADE IT!</div>
        <div className="text-xl opacity-80 mt-4">
          Great. Welcome to my portfolio. Feel free to roam around and relax for
          a while.
        </div>
      </div>
      <div id="home-hero-right" className="w-96">
        <div className="text-2xl font-bold">Hi! My name is Jan.</div>
        <div className="text-xl opacity-80 mt-4">
          I am a 22 year old full stack developer from the Netherlands with a
          key interest in visual design and data science.
        </div>
        <span id="pagelink">
        <Link to={"/about-me"} className="btn btn-primary btn-lg mt-8">About me</Link>
        </span>
      </div>
     
    </div>
  );
}
