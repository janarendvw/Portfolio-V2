import { useContext, useEffect } from "react";
import { Clipboard, FileText } from "react-feather";
import { Link } from "react-router-dom";
import { bgContext } from "../../App";

type Props = {};

export default function AboutMePage({}: Props) {
  const rotation = useContext(bgContext);
  useEffect(() => {
    if (rotation !== null) {
      rotation?.setRotation(-1);
    }
  }, [bgContext]);
  return (
    <main id="main-content" className="flex flex-col-reverse gap-32 lg:flex-row justify-between items-center lg:items-between col-start-2 col-span-10 row-start-2">
      <div id="about-me-text" className="w-full lg:w-1/3 flex flex-col slide-up">
        <div>
          <div className="text-4xl font-bold">About Me</div>
          <div id="about-me-text-p" className="text-xl opacity-80 mt-4">
            Nice to meet you here! My name is Jan and I am a 22 year old full
            stack developer from with a key interest in{" "}
            <strong>visual design, photography and data science. </strong>
            <br />
            <br />
            Since I was little I have a great passion for technology and design,
            and my main focus is to construct inspiring and minimalistic design.
            You can see my progress and experience in the projects tab.
          </div>
        </div>
        <div className="flex flex-row mt-8 gap-4">
          <Link to={"/projects"} className="btn btn-primary text-white w-max gap-4">
            <Clipboard /> Projects
          </Link>
          <a href="#" className="btn btn-secondary btn-outline w-max gap-4">
            <FileText /> Resumé
          </a>
        </div>
      </div>
      <div id="about-me-image" className="lg:pt-0 pt-24 w-1/2 lg:w-1/4 flex h-full slide-right">
        <img src="/images/about-me.svg" alt="about me" />
      </div>
    </main>
  );
}
