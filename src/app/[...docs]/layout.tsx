import "../docs.css";

import React from "react";

import { allContents } from "contentlayer/generated";
import { Left, Right } from "@/components/ChangingDocs";
import Menu from "@/components/Menu";

export async function generateStaticParams() {
  return allContents.map((post) => ({
    docs: post.slug.split("/").slice(1),
  }));
}

type Props = {
  children: React.ReactNode;
};

export default function DocsLayout({ children }: Props) {
  return (
    <div className="flex w-full justify-center gap-8">
      <Left />
      <main className="min-h-dvh w-full max-w-5xl bg-background dark:bg-[#191919]">
        <div className="sticky top-0 z-50 mb-8 flex h-16 w-full items-center justify-center bg-[#f6f6f6] dark:bg-black">
          <div className="absolute bottom-0 left-0 h-8 w-8 -translate-x-1/2 translate-y-1/2 rounded-full bg-inherit">
            <div className="h-full w-full translate-x-1/2 translate-y-1/2 rounded-full bg-white dark:bg-[#191919]" />
          </div>
          <div className="absolute bottom-0 right-0 h-8 w-8 translate-x-1/2 translate-y-1/2 rounded-full bg-inherit">
            <div className="h-full w-full -translate-x-1/2 translate-y-1/2 rounded-full bg-white dark:bg-[#191919]" />
          </div>
          <Menu />
        </div>
        <div className="animate-fade-in px-4 opacity-0 md:px-8">{children}</div>
      </main>
      <Right />
    </div>
  );
}
