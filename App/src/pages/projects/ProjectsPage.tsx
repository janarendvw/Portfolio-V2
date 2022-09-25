import React, { useEffect } from "react";
import {
  Code,
  ExternalLink,
} from "react-feather";
import Timeline from "../../layout/Timeline";
import ContactForm from "../contact/ContactForm";
import "./projectPage.scss";
type Props = {};
const projects = [
  {
    id: 1,
    title: "Project 1",
    description:
      "this text contains 50 words: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nunc nisl eget nunc.",
    image: "https://picsum.photos/600/300",
    date: "2021-01-01",
    tags: ["React", "Typescript", "Tailwind"],
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "this text contains 50 words: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nunc nisl eget nunc.",
    image: "https://picsum.photos/200/300",
    date: "2021-01-02",
    tags: ["Html", "Typescript", "Tailwind"],
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "this text contains 50 words: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nunc nisl eget nunc.",
    image: "https://picsum.photos/300/300",
    date: "2021-01-03",
    tags: ["React", "Typescript", "Vue"],
  },
  {
    id: 4,
    title: "Project 4",
    description:
      "this text contains 50 words: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nunc nisl eget nunc.",
    image: "https://picsum.photos/800/300",
    date: "2021-01-04",
    tags: ["React", "Typescript", "Tailwind", "CSS", "Nuxt"],
  },
  {
    id: 5,
    title: "Project 5",
    description:
      "this text contains 50 words: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nunc nisl eget nunc.",
    image: "https://picsum.photos/500/300",
    date: "2021-01-05",
    tags: ["React", "Typescript", "Tailwind"],
  },
];
export default function ProjectsPage({}: Props) {
  useEffect(() => {
    const slider: any = document.querySelector("#projects-scroller");
    let isDown = false;
    let startX: any;
    let scrollLeft: any;

    slider?.addEventListener("mousedown", (e: { pageX: number }) => {
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
    slider?.addEventListener(
      "mousemove",
      (e: { preventDefault: () => void; pageX: number }) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = x - startX;
        slider.scrollLeft = scrollLeft - walk;
      }
    );
  }, []);

  return (
    <div className="flex justify-between col-start-2 row-start-2 row-end-2 col-end-12">
      <div id="projects-section" className="w-2/3">
        <div className="flex flex-col lg:flex-row md:justify-between items-start pb-4">
          <div className="text-4xl font-bold">My projects</div>
          <div
            id="projects-skill-filter"
            className="items-center gap-4 flex hover:opacity-100 cursor-pointer"
          >
            <span className="opacity-70">Filter by skill:</span>
            <span className="gap-4 flex py-2">
              <span className="badge badge-outline badge-secondary opacity-90 hover:opacity-100 cursor-pointer">
                html
              </span>
              <span className="badge badge-outline badge-secondary opacity-90 hover:opacity-100 cursor-pointer">
                Wordpress
              </span>
              <span className="badge badge-secondary cursor-pointer">
                React js
              </span>
              <span className="badge badge-outline badge-secondary opacity-90 hover:opacity-100 cursor-pointer">
                Vue js
              </span>
            </span>
          </div>
        </div>
        <div id="projects-container" className="pt-8 pb-4">
        <Timeline />
          <div
            id="projects-scroller"
            className="overflow-auto grid grid-flow-row md:grid-flow-col cursor-grab gap-10"
          >
            {projects.map((project, index) => {
              return (
                <div
                  style={
                    {
                      background: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      "--animation-order": index,
                    } as React.CSSProperties
                  }
                  id="project"
                  className="snap-center h-96 w-96 text-white flex flex-col justify-between overflow-hidden duration-100"
                >
                  <div className="bg-black/60 hover:bg-black/90 duration-200 h-full flex flex-col justify-between">
                    <div id="project-text" className="p-4">
                      <div id="project-header" className="flex justify-between items-center">
                        <div className="text-xl pb-2">
                          {project.title}
                        </div>
                      </div>
                      <div
                        id="project-description"
                        className="text-md opacity-0 hidden mt-4 flex"
                      >
                        {project.description}
                      </div>
                    </div>
                    <div id="project-tags" className="flex p-4 gap-4 flex-wrap w-3/4 justify-center m-auto">
                        {project.tags.map((tag) => {
                          return (<span className="badge badge-secondary badge-outline tracking-wide">{tag}</span>)})}
                      </div>
                    <span className="flex justify-between p-4 items-center">
                      <a
                        className="btn btn-sm btn-primary mt-4 w-max flex gap-2"
                        href="#"
                      >
                        <ExternalLink size={16} /> visit
                      </a>
                      <a
                        className="btn btn-sm btn-secondary btn-outline mt-4 w-max flex gap-2"
                        href="#"
                      >
                        <Code size={16} />
                        code
                      </a>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        
        </div>
      
      </div>
      <div id="projects-contact" className="w-1/4">
        <div className="text-2xl font-bold">Let's talk!</div>
        <div className="text-xl opacity-80 my-4">
          I am always open to new opportunities and challenges. If you have any
          questions or want to work together, feel free to contact me!
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
