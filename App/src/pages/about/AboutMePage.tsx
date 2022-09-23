import React from "react";
import { Link } from "react-router-dom";

type Props = {};

export default function AboutMePage({}: Props) {
  return (
    <div className="flex justify-between items-between col-start-2 col-span-10 row-start-2">
      <div id="about-me-text" className="w-1/3 flex flex-col justify-between">
        <div>
          <div className="text-4xl font-bold">About Me</div>
          <div id="about-me-text-p" className="text-xl opacity-80 mt-4">
            Nice to meet you here! My name is Jan and I am a 22 year old full stack developer from
            with a key interest in visual design and data
            science.
          </div>
        </div>
        <Link to={"/projects"} className="btn btn-primary btn-lg w-min mt-4">
          Projects
        </Link>
      </div>
      <div
        id="about-me-image"
        className="w-1/3"
        style={{ background: "gray" }}
      ></div>
    </div>
  );
}
