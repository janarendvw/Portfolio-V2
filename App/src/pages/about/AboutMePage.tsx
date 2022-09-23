import React from "react";

type Props = {};

export default function AboutMePage({}: Props) {
  return (
    <div className="flex justify-between col-start-2 col-span-10 row-start-2">
      <div id="about-me-text" className="w-1/3">
        <div className="text-4xl font-bold">About Me</div>
        <div id="about-me-text-p" className="text-xl opacity-80 mt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsum
        obcaecati delectus, atque dolorum eveniet autem, dignissimos eum, labore
        accusamus sequi omnis aperiam inventore vitae ab corrupti voluptatem
        illum modi!
        </div>
      </div>
      <div id="about-me-image" className="w-1/3" style={{ background: 'gray' }}>
        </div>
    </div>
  );
}
