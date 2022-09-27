import React, { useEffect, useState } from "react";
import { ChevronDown, Code, ExternalLink } from "react-feather";
import Project from "../../layout/Project";
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
    tags: ["React", "Typescript", "SCSS"],
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
  let skillList: any = [];
  const [selectedSkill, setSelectedSkill] = useState("All");
  const [uniqueSkillList, setUniqueSkillList] = useState([]);
  const [filteredProjectsList, setFilteredProjectsList] = useState<any>([]);

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

    function onlyUnique(value: any, index: number, self: any) {
      return self.indexOf(value) === index;
    }

    const addSkills = () => {
      skillList.push("All");
      projects.map((project) => {
        skillList.push(...project.tags);
      });
      setUniqueSkillList(skillList.filter(onlyUnique));
    };
    addSkills();

    const filteredProjects = projects.filter((project) => {
      if (selectedSkill === "All") {
        return project;
      } else {
        return project.tags.includes(selectedSkill);
      }
    });

    setFilteredProjectsList(filteredProjects);

    console.log(filteredProjectsList);
  }, [selectedSkill]);

  return (
    <div className="flex justify-between col-start-2 row-start-2 row-end-2 col-end-12">
      <div id="projects-section" className="w-2/3">
        <div className="flex flex-col lg:flex-row md:justify-between items-start pb-4">
          <div className="text-4xl font-bold">My projects</div>
          <div
            id="projects-skill-filter"
            className="items-center gap-4 flex hover:opacity-100"
          >
            <div className="dropdown">
              <span className="opacity-70">Filter by skill:</span>
              <label
                tabIndex={0}
                className="font-bold mx-5 inline-flex gap-2 cursor-pointer"
              >
                {selectedSkill} <ChevronDown />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                {uniqueSkillList.map((skill) => {
                  return (
                    <span
                      className="cursor-pointer hover:bg-primary px-2"
                      onClick={() => {
                        setSelectedSkill(skill);
                      }}
                    >
                      {skill === selectedSkill ? <span className="text-secondary font-bold">{skill}</span> : skill}
                    </span>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div id="projects-container" className="pt-8 pb-4">
          <Timeline />
          <div
            id="projects-scroller"
            className="overflow-auto grid grid-flow-row md:grid-flow-col cursor-grab gap-10"
          >
            {filteredProjectsList.map((project: any, index: number) => {
              if (project.id === 1) {
                return (
                  <div
                    id="project"
                    className="indicator border border-primary rounded-box"
                    style={
                      { "--animation-order": index } as React.CSSProperties
                    }
                  >
                    <span className="indicator-item badge badge-primary ">
                      new
                    </span>
                    <Project
                    selectedSkill={selectedSkill}
                      key={index}
                      index={project.id}
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      tags={project.tags}
                    />
                  </div>
                );
              } else {
                return (
                  <Project
                    selectedSkill={selectedSkill}
                    key={index}
                    index={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                  />
                );
              }
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
