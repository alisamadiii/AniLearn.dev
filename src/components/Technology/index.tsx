import React, { useEffect } from "react";
import Link from "next/link";

import { Heading_3 } from "../Headings";

// Types
import { TechnologyProps } from "./index.types";

export default function Technology({
  name,
  description,
  link,
  Icon,
}: TechnologyProps) {
  useEffect(() => {
    document.body.onmousemove = (e) => {
      const boxes = document.querySelectorAll<HTMLDivElement>("#box");

      boxes.forEach((box) => {
        const rect = box.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        box.style.setProperty("--mouse-x", `${x}px`);
        box.style.setProperty("--mouse-y", `${y}px`);
      });
    };
  }, []);

  return (
    <div
      id="box" // This is for using Pseudo Element (::before & ::after)
      className="md:p-[2px] overflow-hidden border rounded-xl border-white-low-opacity backdrop-blur-sm"
    >
      <div className="z-20 flex flex-col items-start h-full p-4 bg-box rounded-xl">
        <div className="bg-[#1B1E22] p-2 rounded-md text-3xl text-white">
          <Icon />
        </div>
        <Heading_3 className="mt-4 mb-1 text-2xl text-white">{name}</Heading_3>
        <p className="mb-8 text-base/6">{description}</p>
        <Link
          href={link}
          scroll={false}
          className="mt-auto text-transparent bg-gradient-text bg-clip-text"
        >
          Start Learning...
        </Link>
      </div>
    </div>
  );
}
