import React from "react";
import Balancer from "react-wrap-balancer";

import { SearchBox } from "@/components/search-panel";
import BackButton from "./back-button";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Completed",
};

export default function UnderConstruction() {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <div className="absolute right-0 top-0 h-52 w-96 bg-foreground/30 blur-3xl dark:bg-foreground/10" />
        <div className="absolute bottom-0 left-0 h-52 w-52 bg-foreground/30 blur-3xl dark:bg-foreground/10" />
        <div className="grid_bg absolute inset-0 opacity-30" />
      </div>
      <div className="relative mx-auto flex h-svh w-full max-w-7xl flex-col items-center justify-center gap-4 px-4 md:gap-8">
        <BackButton />
        <Balancer
          as={"h1"}
          className="w-full text-center font-display text-4xl font-bold md:text-6xl"
        >
          This page will be finished ASAP
        </Balancer>
        <p className="mb-8 max-w-2xl text-center text-sm text-muted md:mb-0 md:text-lg">
          I&apos;m currently engaged in improving this page. If you&apos;re
          interested in contributing and lending a hand, feel free to explore
          the{" "}
          <a
            target="_blank"
            href="https://github.com/AliReza1083/AniLearn.dev"
            className="text-foreground underline hover:no-underline"
            rel="noreferrer"
          >
            repository
          </a>
          .
        </p>
        <div className="w-full max-w-sm">
          <SearchBox />
        </div>
      </div>
    </>
  );
}
