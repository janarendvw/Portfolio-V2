import React, { useEffect } from "react";

type Props = {};

export default function Timeline({}: Props) {
  useEffect(() => {
    const slider: any = document.querySelector("#projects-scroller");
    const timelineBar: any = document.querySelector("#timeline-thumb");
    let isDown = false;
    let startX: any;
    let scrollLeft: any;

    slider?.addEventListener("mousedown", (e: { pageX: number }) => {
      slider.style.cursor = "grabbing";
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider?.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider?.addEventListener("mouseup", () => {
      slider.style.cursor = "grab";
      isDown = false;
      slider.classList.remove("active");
    });
    slider?.addEventListener(
      "mousemove",
      (e: { preventDefault: () => void; pageX: number }) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = x - startX;
        slider.scrollLeft = scrollLeft - walk;
      }
    );

    slider?.addEventListener("scroll", () => {
      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      const percent = (slider.scrollLeft / maxScrollLeft) * 100;
      timelineBar.style.left = `calc(${percent}% - ${timelineBar.clientWidth /2}px)`;
    });

  }, []);
  return (
    <div id="timeline" className="w-full flex items-center justify-between">
      <div className="w-min pr-4 h-3 text-2xs flex items-center text-secondary">Recent</div>
      <div id="timeline-track" className="w-full h-1 bg-secondary/20 flex items-center overflow-hidden rounded-box"><span id="timeline-thumb" className="rounded-box block w-8 h-3 bg-secondary relative"></span></div>
      <div className="w-min pl-4 h-3 text-2xs flex items-center text-secondary/70">Older</div>
    </div>
  );
}
