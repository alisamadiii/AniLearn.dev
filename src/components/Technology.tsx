import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { AiFillHtml5 } from "react-icons/ai";
import { Heading_3 } from "./Headings";
import { IconType } from "react-icons";

type Props = {
  name: string;
  description: string;
  link: string;
  Icon: IconType;
};

export default function Technology({ name, description, link, Icon }: Props) {
  return (
    <div className="relative flex flex-col items-start p-4 overflow-hidden border bg-box/40 rounded-xl border-white-low-opacity backdrop-blur-sm">
      {/* Mouse Move */}
      {/* <div className={`w-24 h-24 rounded-full bg-mouse-move absolute`} /> */}
      <div className="bg-[#1B1E22] p-2 rounded-md text-3xl text-white">
        <Icon />
      </div>
      <Heading_3 className="mt-4 mb-1 text-2xl text-white">{name}</Heading_3>
      <p className="text-base/6">{description}</p>
      <Link
        href={link}
        className="mt-8 text-transparent bg-gradient-text bg-clip-text"
      >
        Start Learning...
      </Link>
    </div>
  );
}
