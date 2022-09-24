import React, { useEffect } from "react";
import { XCircle } from "react-feather";
import ContactForm from "../contact/ContactForm";
import './projectPage.scss'
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

useEffect(() => {
  const slider:any = document.querySelector("#projects-scroller");
  let isDown = false;
  let startX: any;
  let scrollLeft: any;
  
  slider?.addEventListener("mousedown", (e: { pageX: number; }) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider?.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider?.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider?.addEventListener("mousemove", (e: { preventDefault: () => void; pageX: number; }) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
  });
}, [])


  return (
    <div className="flex justify-between col-start-2 row-start-2 row-end-2 col-end-12">
      <div id="projects-section" className="w-2/3">
        <div className="flex flex-col lg:flex-row md:justify-between items-start">
        <div className="text-4xl font-bold">My projects</div>
        <div
          id="projects-skill-filter"
          className="items-center gap-4 flex hover:opacity-100 cursor-pointer"
        >
          <span className="opacity-60 font-bold">Filter by skill:</span>
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
        <div id="projects-container">
        <div
          id="projects-scroller"
          className="grid overflow-auto grid-flow-row md:grid-flow-col gap-4 p-4 cursor-grab"
        >
          {projects.map((project, index) => {
            return (
                <div
                  style={{ background: `url(${project.image})`, backgroundSize: "cover", backgroundPosition: "center", "--animation-order": index } as React.CSSProperties }
                  id="project" className="snap-center h-96 w-96 rounded-lg shadow-lg flex flex-col justify-between overflow-hidden hover:scale-[1.03] duration-100"
                >
                  <div className="bg-black/70 hover:bg-black/20 duration-200 h-full flex flex-col justify-between p-4">
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
      </div>
      <div id="projects-contact" className="w-1/4">
        <div className="text-2xl font-bold">Let's get in touch!</div>
        <div className="text-xl opacity-80 my-4">
          I am always open to new opportunities and challenges. If you have any
          questions or want to work together, feel free to contact me!
        </div>
        <ContactForm/>
      </div>
    </div>
  );
}
