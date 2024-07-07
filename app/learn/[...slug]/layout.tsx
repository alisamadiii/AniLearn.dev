import React from "react";

import LeftNavbarItems from "./left-navbar";
import { getTableOfContents } from "@/lib/toc";
import { allLearns } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import { DashboardTableOfContents } from "@/components/toc";
import ScrollUp from "./scroll-up";
import Menu from "./menu";

import { IoVideocam, IoLogoGithub } from "react-icons/io5";
import { SearchBox } from "@/components/search-panel";
import Link from "next/link";

import { FaHandsHelping } from "react-icons/fa";

interface Props {
  children: React.ReactNode;
  params: {
    slug: string[];
  };
}

export default async function ContentLayout({ children, params }: Props) {
  const currentSlug = `${params.slug.join("/")}`;

  const findingContents = allLearns.find(
    (learn) => learn.slugAsParams === currentSlug
  );

  if (findingContents === null || findingContents === undefined) {
    return notFound();
  }

  const toc = await getTableOfContents(findingContents.body.raw);

  return (
    <div className="mx-auto mt-content-top grid w-full grid-cols-5 items-start gap-8">
      <div className="absolute right-0 top-0 h-1/2 w-1/2 bg-primary/5 blur-3xl"></div>

      <nav className="sticky top-[83px] hidden h-dvh border-r px-4 py-4 md:block md:h-[calc(100dvh-80px)]">
        <SearchBox />
        <div className="mb-6 mt-6">
          <Link
            href={"/learn/contributing"}
            className="flex items-center gap-2 text-muted hover:text-foreground"
          >
            <span className="rounded bg-muted/20 p-1 text-foreground">
              <FaHandsHelping />
            </span>{" "}
            Contributing
          </Link>
        </div>
        <LeftNavbarItems techs="HTML" />
        <LeftNavbarItems techs="CSS" />
        <LeftNavbarItems techs="JavaScript" />
      </nav>

      <Menu />

      <div className="col-span-5 md:col-span-4 lg:col-span-3">
        <div className="mx-auto max-w-3xl px-4 py-4">{children}</div>
      </div>

      <div className="sticky top-24 hidden divide-y-[1px] divide-foreground/20 lg:block">
        <DashboardTableOfContents toc={toc} />
        <div className="flex flex-col pt-2">
          <a
            href={`https://github.com/AliReza1083/AniLearn.dev/tree/main/contents/${findingContents._id}`}
            target="_blank"
            className="flex items-center gap-2 py-1 text-sm text-muted focus:text-foreground"
            rel="noreferrer"
          >
            <IoLogoGithub /> Edit this page on GitHub
          </a>
          {findingContents.link_content && (
            <a
              href={findingContents.link_content}
              target="_blank"
              className="flex items-center gap-2 py-1 text-sm text-muted focus:text-foreground"
              rel="noreferrer"
            >
              <IoVideocam /> Video Lesson
            </a>
          )}
          <ScrollUp />
        </div>
      </div>
    </div>
  );
}
