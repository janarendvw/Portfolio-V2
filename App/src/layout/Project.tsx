import React from "react";
import { Code, ExternalLink } from "react-feather";

type Props = {
  image: string;
  index: number;
  title: string;
  description: string;
  tags: string[];
  selectedSkill: string;
};

export default function Project({
  image,
  index,
  title,
  description,
  tags,
  selectedSkill,
}: Props) {
  return (
    <main
      style={
        {
          background: `url(${image})`,
          backgroundSize: "200%",
          backgroundPosition: "center",
          "--animation-order": index,
        } as React.CSSProperties
      }
      id="project"
      className="snap-center h-96 w-96 text-white flex flex-col justify-between overflow-hidden duration-100 card"
    >
      <div className="bg-black/10 hover:bg-black/90 duration-200 h-full flex flex-col justify-between">
        <div id="project-text" className="p-4">
          <div
            id="project-header"
            className="flex justify-between items-center"
          >
            <div className="text-xl pb-2">{title}</div>
          </div>
          <div
            id="project-description"
            className="text-md opacity-0 hidden mt-4 hover:flex"
          >
            {description}
          </div>
        </div>
        <span>
          <span className="flex justify-between px-4 pb-4 items-center">
            <a
            aria-label={`View ${title}`}	
              className="btn btn-sm btn-primary mt-4 w-max flex gap-2 text-white"
              href="#"
            >
              <ExternalLink size={16} /> visit
            </a>
            <a
            aria-
            aria-label={`View the source-code of ${title} on GitHub`}	
              className="btn btn-sm border-white text-white btn-outline bg-black/50 mt-4 w-max flex gap-2"
              href="#"
            >
              <Code size={16} />
              code
            </a>
          </span>
          <div
            id="project-tags"
            className="flex p-4 h-16 gap-4 flex-wrap w-full justify-center items-center bg-base-100 duration-400"
          >
            {tags.map((tag, index) => {
              if (tag === selectedSkill) {
                return (
                  <span
                    key={index}
                    style={{ boxShadow: "0px 2px 5px 0px #00000050" }}
                    className="badge bg-base-content border-none text-base-100 tracking-wide font-bold"
                  >
                    {tag}
                  </span>
                );
              } else {
                return (
                  <span
                    key={index}
                    className="badge badge-outline bg-base-100 text-base-content tracking-wide opacity-90"
                  >
                    {tag}
                  </span>
                );
              }
            })}
          </div>
        </span>
      </div>
    </main>
  );
}
