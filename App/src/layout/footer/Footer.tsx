import React, { useEffect } from "react";
import { Moon, Sun } from "react-feather";
import { themeChange } from "theme-change";
import Socials from "./Socials";

type Props = {};

export default function Footer({}: Props) {
  useEffect(() => {
    themeChange(false);
  }, []);
  return (
    <div className="col-start-0 col-span-12 row-start-3 self-end p-4 flex justify-between">
      <Socials />
      <span className="flex gap-4 items-center"> Theme: 
      <select data-choose-theme className="bg-base-100 cursor-pointer">
  <option value="myDark">Dark</option>
  <option value="myLight">Light</option>
</select>
</span>
    </div>
  );
}
