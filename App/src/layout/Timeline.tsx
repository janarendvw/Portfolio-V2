import React from "react";

type Props = {};

export default function Timeline({}: Props) {
  return (
    <div id="timeline" className="w-full flex items-center justify-between">
      <div className="w-min pr-4 h-3 text-2xs flex items-center text-secondary">Recent</div>
      <div id="timeline-track" className="w-full h-1 bg-secondary/20 flex items-center overflow-hidden"><span id="timeline-thumb" className="block w-8 h-1 bg-secondary relative"></span></div>
      <div className="w-min pl-4 h-3 text-2xs flex items-center text-secondary">Older</div>
    </div>
  );
}
