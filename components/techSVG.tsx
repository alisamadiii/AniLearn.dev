"use client";

import { useGlobalStore } from "@/context";
import React from "react";

import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

interface Props {
  tech: "html" | "css" | "js";
}

export default function TechIcons({ tech }: Props) {
  const { hoverTech } = useGlobalStore();

  const currentIcon = {
    html: (
      <div
        className="group h-36 w-36 rounded-3xl bg-html p-4 text-white shadow-[0_0_100px] shadow-html duration-200 hover:bg-transparent"
        style={{
          flex: "0 0 auto",
          opacity: hoverTech !== "html" && hoverTech !== null ? 0.5 : 1,
        }}
      >
        <div
          className="relative isolate h-full w-full overflow-hidden rounded-2xl bg-html p-4 before:animate-html before:duration-75 after:bg-html"
          id="rounded-animation"
        >
          <FaHtml5 className="h-full w-full" />
        </div>
      </div>
    ),
    css: (
      <div
        className="h-36 w-36 rounded-3xl bg-css p-4 text-white shadow-[0_0_100px] shadow-css duration-200 hover:bg-transparent"
        style={{
          flex: "0 0 auto",
          opacity: hoverTech !== "css" && hoverTech !== null ? 0.5 : 1,
        }}
      >
        <div
          className="relative isolate h-full w-full overflow-hidden rounded-2xl bg-css p-4 before:animate-css after:bg-css"
          id="rounded-animation"
        >
          <FaCss3Alt className="h-full w-full" />
        </div>
      </div>
    ),
    js: (
      <div
        className="h-36 w-36 rounded-3xl bg-js p-4 text-black shadow-[0_0_100px] shadow-js duration-200 hover:bg-transparent"
        style={{
          flex: "0 0 auto",
          opacity: hoverTech !== "javascript" && hoverTech !== null ? 0.5 : 1,
        }}
      >
        <div
          className="relative isolate h-full w-full overflow-hidden rounded-2xl bg-js p-1 before:animate-js after:bg-js"
          id="rounded-animation"
        >
          <RiJavascriptFill className="h-full w-full" />
        </div>
      </div>
    ),
  }[tech];

  return currentIcon;
}
