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
    image: "https://picsum.photos/900/600",
    date: "2021-01-01",
    tags: ["React", "Typescript", "SCSS"],
  },
  {
    id: 2,
    title: "Project 2",
    description:
      "this text contains 50 words: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nunc nisl eget nunc.",
    image: "https://picsum.photos/800/500",
    date: "2021-01-02",
    tags: ["Html", "WASM", "Tailwind"],
  },
  {
    id: 3,
    title: "Project 3",
    description:
      "this text contains 50 words: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nunc nisl eget nunc.",
    image: "https://picsum.photos/1000/800",
    date: "2021-01-03",
    tags: ["React", "Typescript", "Vue"],
  },
  {
    id: 4,
    title: "Project 4",
    description:
      "this text contains 50 words: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nunc nisl eget nunc. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nisl, nec ultricies nunc nisl eget nunc.",
    image: "https://picsum.photos/800/600",
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
  const [numberOfProjectsShown, setNumberOfProjectsShown] = useState(0);

  useEffect(() => {
    function onlyUnique(value: any, index: number, self: any) {
      return self.indexOf(value) === index;
    }

    const addSkills = () => {
      skillList.push("All");
      projects.map((project) => {
        skillList.push(...project.tags);
      });
      setUniqueSkillList(skillList.filter(onlyUnique).sort());
    };
    addSkills();

    const filteredProjects = projects.filter((project) => {
      if (selectedSkill === "All") {
        return project;
      } else {
        return project.tags.includes(selectedSkill);
      }
    })

    setFilteredProjectsList(filteredProjects);
    setNumberOfProjectsShown(filteredProjects.length);
  }, [selectedSkill]);

  return (
    <div className="flex justify-between col-start-2 row-start-2 row-end-2 col-end-12">
      <div id="projects-section" className="w-2/3">
        <div className="flex flex-col lg:flex-row md:justify-between items-end">
          <div className="text-4xl font-bold">My projects</div>
         
        </div>
        <div id="projects-container" className="pt-8 pb-4">
          <div className="flex justify-between">
          <span className="p-0 text-sm"><span className="text-secondary font-bold mr-1">{numberOfProjectsShown}</span> {numberOfProjectsShown > 1 ? "projects" : "project"} shown</span>
          <div
            id="projects-skill-filter"
            className="items-center gap-4 flex hover:opacity-100"
          >
             <span className="opacity-70">Filtered by skill:</span>
        <select className="cursor-pointer bg-transparent border-none text-secondary" onChange={(e) => setSelectedSkill(e.target.value)}>
                {uniqueSkillList.map((skill, index) => {
                  return (
                    <option
                    key={index}
                      className=" bg-base-100 hover:bg-secondary hover:text-base-100 px-2"
                      value={skill}
                    >{skill}</option>
  
                  );
                })}
              </select>

          </div>
          </div>
          <div
            id="projects-scroller"
            className="overflow-auto grid grid-flow-row md:grid-flow-col cursor-grab gap-10"
          >
            {filteredProjectsList.map((project: any, index: number) => {
              if (project.id === 1) {
                return (
                  <div
                    key={index}
                    className="indicator border border-primary rounded-box"
                  >
                    <span className="indicator-item badge badge-primary ">
                      new
                    </span>
                    <Project
                    selectedSkill={selectedSkill}
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
                  <div className="border border-base-100 rounded-box" key={index}>
                  <Project
                    selectedSkill={selectedSkill}
                    index={index}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                  />
                  </div>
                );
              }
            })}
          </div>
          <Timeline />
        </div>
      </div>
      <div id="projects-contact" className="w-1/4 flex flex-col">
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
