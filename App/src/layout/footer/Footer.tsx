import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { themeChange } from "theme-change";
import Socials from "./Socials";

type Props = {};

export default function Footer({}: Props) {
  const location = useLocation();

  useEffect(() => {
    themeChange(false);
  }, []);

  useEffect(() => {
    return () => {
    let footer = document.getElementById('footer');
    footer?.classList.add('moveDownUp');
    setTimeout(() => {
    footer?.classList.remove('moveDownUp');
    }, 3700);}
  }, [location]);
  return (
    <footer id={'footer'} className="col-start-0 col-span-12 row-start-3 self-end p-4 flex justify-between">
      <Socials />
      <span className="flex gap-4 items-center"> Theme: 
      <select aria-label="theme select" data-choose-theme className="bg-base-100 cursor-pointer focus-visible:outline rounded-box">
  <option value="myDark">Dark</option>
  <option value="myLight">Light</option>
</select>
</span>
    </footer>
  );
}
