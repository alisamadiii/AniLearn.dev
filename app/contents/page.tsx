import { type Metadata } from "next";
import Link from "next/link";
import React from "react";

import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

export const metadata: Metadata = {
  title: "Content",
};

export default function ContentsPage() {
  return (
    <div className="mx-auto mt-24 max-w-7xl px-4">
      <h1 className="text-3xl font-bold md:text-5xl">Choose a Technology</h1>
      <div className="my-8 flex flex-wrap gap-4">
        <Link
          href={"/html"}
          className="relative h-64 grow basis-80 overflow-hidden rounded-lg border border-foreground/20 p-8 before:absolute before:inset-0 before:-z-20 before:rounded-lg before:bg-gradient-to-r before:from-primary before:to-background before:opacity-0 before:duration-200 after:absolute after:inset-px after:-z-10 after:rounded-lg after:bg-gradient-to-tl after:from-background after:to-yellow-200 after:opacity-0 after:duration-200 hover:border-transparent hover:before:opacity-100 hover:after:opacity-100 dark:after:to-yellow-950"
        >
          <h2 className="text-3xl font-medium">HTML</h2>
          <p className="text-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="absolute bottom-0 right-0 w-48 translate-x-[30%] translate-y-[30%] -rotate-45">
            <FaHtml5 className="h-full w-full" />
          </div>
        </Link>
        <Link
          href={"/css"}
          className="relative h-64 grow basis-80 overflow-hidden rounded-lg border border-foreground/20 p-8 before:absolute before:inset-0 before:-z-20 before:rounded-lg before:bg-gradient-to-r before:from-primary before:to-background before:opacity-0 before:duration-200 after:absolute after:inset-px after:-z-10 after:rounded-lg after:bg-gradient-to-tl after:from-background after:to-yellow-200 after:opacity-0 after:duration-200 hover:border-transparent hover:before:opacity-100 hover:after:opacity-100 dark:after:to-yellow-950"
        >
          <h2 className="text-3xl font-medium">CSS</h2>
          <p className="text-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="absolute bottom-0 right-0 w-48 translate-x-[30%] translate-y-[30%] -rotate-45">
            <FaCss3Alt className="h-full w-full" />
          </div>
        </Link>
        <Link
          href={"/javascript"}
          className="relative h-64 grow basis-80 overflow-hidden rounded-lg border border-foreground/20 p-8 before:absolute before:inset-0 before:-z-20 before:rounded-lg before:bg-gradient-to-r before:from-primary before:to-background before:opacity-0 before:duration-200 after:absolute after:inset-px after:-z-10 after:rounded-lg after:bg-gradient-to-tl after:from-background after:to-yellow-200 after:opacity-0 after:duration-200 hover:border-transparent hover:before:opacity-100 hover:after:opacity-100 dark:after:to-yellow-950"
        >
          <h2 className="text-3xl font-medium">JavaScript</h2>
          <p className="text-paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="absolute bottom-0 right-0 w-48 translate-x-[30%] translate-y-[30%] -rotate-45">
            <RiJavascriptFill className="h-full w-full" />
          </div>
        </Link>
      </div>
    </div>
  );
}
