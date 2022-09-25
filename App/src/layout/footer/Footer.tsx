import React from "react";
import Socials from "./Socials";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="col-start-0 col-span-1 row-start-3 self-end p-4">
      <Socials />
    </div>
  );
}
