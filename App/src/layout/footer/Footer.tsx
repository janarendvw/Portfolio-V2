import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { themeChange } from "theme-change";
import AudioSwitch from "../AudioSwitch";
import Socials from "./Socials";

type Props = {};

export default function Footer({}: Props) {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <footer id={'footer'} className="col-start-0 col-span-12 row-start-3 self-end flex justify-between items-bottom px-4">
      <Socials />
      <AudioSwitch/>
    </footer>
  );
}
