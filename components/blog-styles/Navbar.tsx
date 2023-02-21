import React from "react";
import Link from "next/link";

import { NavProps } from "@/types/Blogs";

export default function Navbar({ links, technology, slug }: NavProps) {
  return (
    <nav
      className={`fixed bg-white md:bg-transparent md:sticky top-0 md:top-24 left-0 h-screen md:h-auto z-50  duration-200`}
    >
      <div className="w-64 px-4 mt-4">
        <h1 className="font-medium">{technology}</h1>
        {links.map((d) => (
          <Link
            key={d.frontmatter.title}
            href={`${
              slug
                ? d.slug.replace(".mdx", "")
                : `${technology.toLowerCase()}/${d.slug.replace(".mdx", "")}`
            }`}
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
  );
}
