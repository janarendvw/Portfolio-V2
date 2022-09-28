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
      <select data-choose-theme>
  <option value="">Default</option>
  <option value="myDark">Dark</option>
  <option value="myLight">Pink</option>
</select>
    </div>
  );
}
