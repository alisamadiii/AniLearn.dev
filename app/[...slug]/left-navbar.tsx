"use client";

import React from "react";
import { allContents } from "contentlayer/generated";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { differenceInDays } from "date-fns";

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
          .sort((a, b) => a.title.localeCompare(b.title))
          .map(
            (content, index) =>
              content.slugAsParams.includes("/") && (
                <li
                  key={index}
                  className={`space-x-2 text-sm hover:underline ${
                    pathname === content.slug ? "text-foreground" : "text-muted"
                  }`}
                >
                  <Link
                    href={content.slug}
                    className="inline-block rounded py-1 outline-none duration-100 focus:text-foreground"
                  >
                    {content.title}
                  </Link>
                  {differenceInDays(new Date(), new Date(content.created_at)) <
                    7 &&
                    !content.completed &&
                    differenceInDays(
                      new Date(),
                      new Date(content.created_at)
                    ) >= 0 && (
                      <span className="rounded-full bg-foreground px-2 py-1 text-[10px] text-background">
                        New
                      </span>
                    )}
                  {content.completed && (
                    <span className="rounded-full bg-foreground px-2 py-1 text-[10px] text-background">
                      Coming...
                    </span>
                  )}
                </li>
              )
          )}
      </ul>
    </>
  );
}
