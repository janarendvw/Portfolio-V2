import React from 'react'
import { Code, ExternalLink } from 'react-feather'

type Props = {
    image: string,
    index: number,
    title: string,
    description: string,
    tags: string[]
}

export default function Project({image, index, title, description, tags}: Props) {
  return (
    <div
    style={
      {
        background: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "--animation-order": index,
      } as React.CSSProperties
    }
    id="project"
    className="snap-center h-96 w-96 text-white flex flex-col justify-between overflow-hidden duration-100"
  >
    <div className="bg-black/60 hover:bg-black/90 duration-200 h-full flex flex-col justify-between">
      <div id="project-text" className="p-4">
        <div id="project-header" className="flex justify-between items-center">
          <div className="text-xl pb-2">
            {title}
          </div>
        </div>
        <div
          id="project-description"
          className="text-md opacity-0 hidden mt-4 flex"
        >
          {description}
        </div>
      </div>
      <div id="project-tags" className="flex p-4 gap-4 flex-wrap w-3/4 justify-center m-auto">
          {tags.map((tag) => {
            return (<span className="badge badge-secondary badge-outline tracking-wide">{tag}</span>)})}
        </div>
      <span className="flex justify-between p-4 items-center">
        <a
          className="btn btn-sm btn-primary mt-4 w-max flex gap-2"
          href="#"
        >
          <ExternalLink size={16} /> visit
        </a>
        <a
          className="btn btn-sm btn-secondary btn-outline mt-4 w-max flex gap-2"
          href="#"
        >
          <Code size={16} />
          code
        </a>
      </span>
    </div>
  </div>
  )
}