import React from "react";
import { GitHub, Linkedin, Twitter } from "react-feather";
import { Link } from "react-router-dom";

type Props = {};

export default function Socials({}: Props) {
  return (
    <div className="flex gap-4">
      <a className="opacity-70 hover:opacity-100" href={"https://github.com"} target={'_blank'}>
        <GitHub size={20} />
      </a>
      <a className="opacity-70 hover:opacity-100" href={"https://linkedin.com"} target={'_blank'}>
        <Linkedin size={20} />
      </a>
    </div>
  );
}
