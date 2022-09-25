import React from "react";

type Props = {};

export default function Timeline({}: Props) {
  return (
    <div className="flex items-center">
      <div className="w-min pr-4 h-3 text-2xs flex items-center text-secondary">Now</div>
      <div className="w-full h-[1px] bg-secondary"></div>
      <div className="w-min pl-4 h-3 text-2xs flex items-center text-secondary">2018</div>
    </div>
  );
}
