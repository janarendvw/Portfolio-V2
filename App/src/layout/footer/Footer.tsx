import React from "react";
import Socials from "./Socials";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="col-start-0 col-span-12 row-start-3 self-end py-4 px-4 bg-white/5">
      <Socials />
    </div>
  );
}
