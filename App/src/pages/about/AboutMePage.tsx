import React from "react";
import { Clipboard } from "react-feather";
import { Link } from "react-router-dom";

type Props = {};

export default function AboutMePage({}: Props) {
  return (
    <div className="flex justify-between items-between col-start-2 col-span-10 row-start-2">
      <div id="about-me-text" className="w-1/3 flex flex-col justify-between">
        <div>
          <div className="text-4xl font-bold">About Me</div>
          <div id="about-me-text-p" className="text-xl opacity-80 mt-4">
            Nice to meet you here! My name is Jan and I am a 22 year old full
            stack developer from with a key interest in visual design and data
            science. 
            <br/><br/>
            Since I was little I have a great passion for technology
            and design, and my main focus is to construct inspiring and
            minimalistic design. You can see my progress and experience in the
            projects tab.
          </div>
        </div>
        <Link
          to={"/projects"}
          className="btn btn-primary btn-lg w-max mt-4 gap-4"
        >
          <Clipboard /> Projects
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
