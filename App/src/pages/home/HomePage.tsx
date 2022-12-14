import { useContext, useEffect } from "react";
import { User } from "react-feather";
import { Link } from "react-router-dom";
import { bgContext } from "../../App";
type Props = {};

export default function HomePage({}: Props) {
  const rotation = useContext(bgContext)
  useEffect(() => {
    rotation.setRotation(1)
    
  }, [bgContext])
  const audio = new Audio("/audio/contact_chord.flac");
  useEffect(() => {
    audio.play();
  }, []);
  return (
    <main id="main-content" className="flex flex-col md:flex-row justify-between col-start-2 col-span-10 row-start-2">
      <div id="home-hero-left" className="w-full md:w-1/3 fade-in">
        <div className="text-6xl">YOU MADE IT!</div>
        <div className="text-xl opacity-80 mt-4">
          Great. Welcome to my portfolio. Feel free to roam around and relax for
          a while.
        </div>
      </div>
      <div id="home-hero-right" className="w-full mt-24 md:mt-auto md:w-96 fade-in">
        <div className="text-2xl font-bold">Hi! My name is Jan.</div>
        <div className="text-xl opacity-80 mt-4">
          I am a 22 year old full stack developer from the Netherlands with a
          key interest in visual design and data science.
        </div>
        <Link to={"/about-me"} className="btn btn-primary mt-8 gap-4 text-white"><User/>About me</Link>
      </div>
    </main>
  );
}
