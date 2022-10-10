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
    <div
      style={
        {
          background: `url(${image})`,
          backgroundSize: "200%",
          backgroundPosition: "center",
          "--animation-order": index,
        } as React.CSSProperties
      }
      id="project"
      className="snap-center h-96 w-96 text-secondary flex flex-col justify-between overflow-hidden duration-100 card"
    >
      <div className="bg-base-100/30 hover:bg-base-100/90 duration-200 h-full flex flex-col justify-between">
        <div id="project-text" className="p-4">
          <div
            id="project-header"
            className="flex justify-between items-center"
          >
            <div className="text-xl pb-2">{title}</div>
          </div>
          <div
            id="project-description"
            className="text-md opacity-0 hidden mt-4 flex"
          >
            {description}
          </div>
        </div>
        <div>
        <div
            id="project-tags"
            className="flex relative h-10 w-full justify-center items-center bg-base-100/50 overflow-x-auto overflow-y-hidden duration-400"
          >
            {tags.map((tag, index) => {
              if (tag === selectedSkill) {
                return (
                  <span
                    key={index}
                    style={{ boxShadow: "0px 2px 5px 0px #00000050" }}
                    className="badge px-2 bg-base-content border-none text-base-100 tracking-wide font-bold"
                  >
                    {tag}
                  </span>
                );
              } else {
                return (
                  <span
                    key={index}
                    className="badge mx-2 badge-outline text-base-content tracking-wide opacity-90"
                  >
                    {tag}
                  </span>
                );
              }
            })}
          </div>
          
        <span>
          <span className="shadow z-10 relative flex justify-between px-4 pb-4 items-center bg-base-100">
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
         
        </span>
        </div>
      </div>
    </div>
  );
}
