import React from "react";
import { GitHub, Linkedin, Twitter } from "react-feather";
import { Link } from "react-router-dom";

type Props = {};

export default function Socials({}: Props) {
  return (
    <div className="flex gap-4">
      <a aria-label="github" className="opacity-70 hover:opacity-100 focus-visible:outline rounded-box" href={"https://github.com"} target={'_blank'}>
        <GitHub size={20} />
      </a>
      <a aria-label="linkedIn" className="opacity-70 hover:opacity-100 focus-visible:outline rounded-box" href={"https://linkedin.com"} target={'_blank'}>
        <Linkedin size={20} />
      </a>
    </div>
  );
}
