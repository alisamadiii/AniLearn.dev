"use client";

import React from "react";
import { allContents } from "contentlayer/generated";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  techs: "HTML" | "CSS" | "JavaScript";
}

export default function LeftNavbarItems({ techs }: Props) {
  const pathname = usePathname();

  return (
    <>
      <h2 className="mb-2 mt-6 text-xs font-medium [&:nth-of-type(1)]:mt-0">
        {techs}
      </h2>
      <ul>
        {allContents
          .filter((content) =>
            content.slugAsParams.includes(techs.toLowerCase())
          )
          .map((content, index) => (
            <li
              key={index}
              className={`text-sm hover:underline ${
                pathname === content.slug ? "text-foreground" : "text-muted"
              }`}
            >
              <Link
                href={content.slug}
                className="inline-block rounded py-1 outline-none duration-100 focus:text-foreground"
              >
                {content.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
