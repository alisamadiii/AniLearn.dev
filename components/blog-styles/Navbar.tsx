import React from "react";
import Link from "next/link";

import { AiOutlineMenu } from "react-icons/ai";

import { NavProps } from "@/types/Blogs";

import { HiArrowNarrowRight } from "react-icons/hi";

export default function Navbar({
  links,
  technology,
  slug,
  isOpen,
  setIsOpen,
}: NavProps) {
  return (
    <>
      <nav
        className={`fixed bg-white md:bg-transparent md:sticky top-0 md:top-24 left-0 h-screen md:h-auto z-[60] duration-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="w-64 px-4 mt-4">
          <h1 className="mb-4 text-2xl font-medium">{technology}</h1>
          {links.map((d) => (
            <Link
              key={d.frontmatter.title}
              href={`${
                slug
                  ? d.slug.replace(".mdx", "")
                  : `${technology.toLowerCase()}/${d.slug.replace(".mdx", "")}`
              }`}
              onClick={() => setIsOpen(false)}
            >
              <p
                className={`px-4 py-1 mt-2 border-l-2 hover:border-primary capitalize ${
                  slug == d.slug.replace(".mdx", "") &&
                  "text-primary border-primary"
                }`}
              >
                {d.slug.replace(".mdx", "").replaceAll("-", " ")}
              </p>
            </Link>
          ))}
        </div>
      </nav>
      {isOpen && (
        <div
          className="md:hidden fixed left-0 w-[100vw] h-screen bg-white bg-opacity-80 backdrop-blur-sm top-0 z-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

type NavbarSmallProps = {
  setIsOpen: (a: boolean) => void;
  technology?: string;
  title?: string;
};

export const NavbarSmall = ({
  setIsOpen,
  technology,
  title,
}: NavbarSmallProps) => {
  return (
    <div className="fixed z-20 flex items-center w-full gap-2 px-4 bg-white border-b-2 opacity-95 backdrop-blur-md md:hidden h-14 top-16 md:px-8">
      <AiOutlineMenu className="text-xl" onClick={() => setIsOpen(true)} />
      <Link
        href={"/docs"}
        className="px-3 py-1 text-xs rounded-full sm:text-sm bg-opacity-30 bg-primary"
      >
        Home
      </Link>
      <HiArrowNarrowRight />
      <Link
        href={"/docs/css"}
        className="px-3 py-1 text-xs rounded-full sm:text-sm bg-opacity-20 bg-slate-300"
      >
        {technology}
      </Link>
      <HiArrowNarrowRight />
      <button className="px-3 py-1 text-xs truncate rounded-full sm:text-sm bg-opacity-20 bg-slate-300">
        {title}
      </button>
    </div>
  );
};
