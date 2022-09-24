import React from "react";
import { XCircle } from "react-feather";

type Props = {};
const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "This is project 1",
    image: "https://picsum.photos/600/300",
  },
  {
    id: 2,
    title: "Project 2",
    description: "This is project 2",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is project 3",
    image: "https://picsum.photos/300/300",
  },
  {
    id: 4,
    title: "Project 4",
    description: "This is project 4",
    image: "https://picsum.photos/800/300",
  },
  {
    id: 5,
    title: "Project 5",
    description: "This is project 5",
    image: "https://picsum.photos/500/300",
  },
];
export default function ProjectsPage({}: Props) {
  return (
    <div className="flex col-start-2 row-start-2 col-end-12 justify-between">
      <div id="projects-section" className="w-2/3">
        <div className="text-4xl font-bold">My projects</div>
        <div id="projects-container">
        <div
          id="projects-scroller"
          className="overflow-y-scroll max-h-[50vh] flex flex-col gap-8 mt-8 grid grid-cols-3 pr-4"
        >
          {projects.map((project) => {
            return (
                <div
                  style={{ background: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center" }}
                  id="project" className="h-96 rounded-lg shadow-lg flex flex-col justify-between"
                >
                  <div className="bg-black/70 h-full flex flex-col justify-between p-4">
                  <div className="flex flex-col n">
                    <div className="text-2xl font-bold">{project.title}</div>
                    <div className="text-xl opacity-80">
                      {project.description}
                    </div>
                  </div>
                  </div>
                </div>
            );
          })}
        </div>
        </div>
        <div
          id="projects-skill-filter"
          className="items-center py-4 gap-4 flex hover:opacity-100 cursor-pointer"
        >
          Filter projects based on skills:
          <span className="gap-4 flex p-4 rounded-md">
            <span className="badge badge-outline badge-warning opacity-50 hover:opacity-100 cursor-pointer">
              html
            </span>
            <span className="badge badge-outline badge-info opacity-50 hover:opacity-100 cursor-pointer">
              Wordpress
            </span>
            <span className="badge badge-primary cursor-pointer">React js</span>
            <span className="badge badge-outline badge-success opacity-50 hover:opacity-100 cursor-pointer">
              Vue js
            </span>
          </span>
        </div>
      </div>
      <div id="projects-contact" className="w-1/4">
        <div className="text-2xl font-bold">Let's get in touch!</div>
        <div className="text-xl opacity-80 mt-4">
          I am always open to new opportunities and challenges. If you have any
          questions or want to work together, feel free to contact me!
        </div>
      </div>
    </div>
  );
}
