import React from "react";

import LeftNavbarItems from "./left-navbar";
import { getTableOfContents } from "@/lib/toc";
import { allContents } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import { DashboardTableOfContents } from "@/components/toc";
import ScrollUp from "./scroll-up";

interface Props {
  children: React.ReactNode;
  params: {
    slug: string[];
  };
}

export default async function ContentLayout({ children, params }: Props) {
  const currentSlug = `/${params.slug.join("/")}`;

  const findingContents = allContents.find(
    (content) => content.slug === currentSlug
  );

  if (findingContents === null || findingContents === undefined) {
    return notFound();
  }

  const toc = await getTableOfContents(findingContents.body.raw);

  console.log(toc);

  return (
    <div className="mx-auto mt-32 grid max-w-7xl grid-cols-5 items-start gap-8 px-4">
      <nav className="sticky top-32">
        <LeftNavbarItems techs="HTML" />
        <LeftNavbarItems techs="CSS" />
        <LeftNavbarItems techs="JavaScript" />
      </nav>
      <div className="col-span-3">{children}</div>
      <div className="sticky top-32 divide-y-[1px] divide-foreground/20">
        <DashboardTableOfContents toc={toc} />
        <div className="flex flex-col pt-2">
          <a
            href={`${process.env.NEXT_PUBLIC_EDIT_URL}${findingContents.slugAsParams}`}
            className="inline-block py-1 text-sm text-muted focus:text-foreground"
          >
            Edit this page on GitHub
          </a>
          <ScrollUp />
        </div>
      </div>
    </div>
  );
}
