"use client";

import React from "react";

import ContributeLabel from "@/components/contribute-label";
import GridBackground from "@/components/grid-background";
import Shadow from "@/components/ComparingDesign/intro/shadow";
import Link from "next/link";

export default function CompareDesign() {
  return (
    <div className="mx-auto mt-content-top flex max-w-7xl flex-col items-center px-4 pt-4">
      <GridBackground />

      <ContributeLabel />

      <h2 key={"no-subject"} className="text-center text-4xl font-bold">
        Comparing
      </h2>

      <p className="max-w-xl text-center text-muted">
        If you are looking to compare designs in order to choose the best one,
        then you can use these tools that are available now.
      </p>

      <div className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Link href={"/compare-design/shadow"} className="rounded-xl bg-white">
          <Shadow />
        </Link>
      </div>
    </div>
  );
}
