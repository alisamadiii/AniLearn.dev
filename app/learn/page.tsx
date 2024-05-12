"use client";

import Link from "next/link";
import React from "react";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { motion } from "framer-motion";

import { allLearns } from "@/.contentlayer/generated";
import CollaborationAnimation from "@/components/collaboration-animation";
import ContributeLabel from "@/components/contribute-label";
import GridBackground from "@/components/grid-background";

type Props = {};

export default function LearnPage({}: Props) {
  const collaboration = allLearns.find((learn) =>
    learn.slug.includes("contributing")
  );
  const aboutProject = allLearns.find((learn) =>
    learn.slug.includes("project")
  );

  console.log(allLearns);

  return (
    <div className="mx-auto mt-content-top max-w-7xl px-4 pt-4">
      <GridBackground />

      <ContributeLabel />
      <h2 className="text-center text-4xl font-bold">
        HTML, CSS, and JavaScript
      </h2>
      <p className="mb-12 mt-4 text-center text-muted">
        You can use this website to learn things visually and it makes
        understanding a lot easier.
      </p>
      <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
        {allLearns
          // @ts-ignore
          .sort((a, b) => {
            if (a.slug.includes("html")) {
              return -1; // "html" comes before anything else
            } else if (b.slug.includes("css")) {
              return 1; // anything else comes after "html"
            }
          })
          .map(
            (learn) =>
              learn.slug.split("/").length > 3 && (
                <li>
                  <Link
                    href={learn.slug}
                    className="group relative isolate inline-block h-full w-full overflow-hidden rounded-xl border p-4 duration-200 hover:-translate-y-1"
                  >
                    <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-transparent to-primary/10 opacity-0 duration-200 group-hover:opacity-100"></div>
                    <div>
                      <h3 className="flex items-center gap-2 text-lg">
                        {learn.slugAsParams.includes("html") ? (
                          <FaHtml5 />
                        ) : learn.slugAsParams.includes("css") ? (
                          <FaCss3Alt />
                        ) : learn.slugAsParams.includes("javascript") ? (
                          <IoLogoJavascript />
                        ) : null}
                        {learn.title}
                      </h3>
                    </div>
                    <p className="mt-2 leading-5 text-muted">
                      {learn.description}
                    </p>
                  </Link>
                </li>
              )
          )}
      </ul>

      <div className="my-12 grid grid-cols-2 items-center gap-8">
        <div className="flex flex-col">
          {collaboration && (
            <Link
              href={collaboration.slug}
              className="group relative isolate inline-block h-full w-2/3 overflow-hidden rounded-xl border bg-white p-4 duration-200 hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-transparent to-primary/10 opacity-0 duration-200 group-hover:opacity-100"></div>
              <div>
                <h3 className="flex items-center gap-2 text-lg">
                  {collaboration.slugAsParams.includes("html") ? (
                    <FaHtml5 />
                  ) : collaboration.slugAsParams.includes("css") ? (
                    <FaCss3Alt />
                  ) : collaboration.slugAsParams.includes("javascript") ? (
                    <IoLogoJavascript />
                  ) : null}
                  {collaboration.title}
                </h3>
              </div>
              <p className="mt-2 leading-5 text-muted">
                {collaboration.description}
              </p>
            </Link>
          )}
          {aboutProject && (
            <Link
              href={aboutProject.slug}
              className="group relative isolate ml-auto inline-block h-full w-2/3 -translate-y-8 overflow-hidden rounded-xl border bg-white p-4 duration-200 hover:-translate-y-1"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-transparent to-primary/10 opacity-0 duration-200 group-hover:opacity-100"></div>
              <div>
                <h3 className="flex items-center gap-2 text-lg">
                  {aboutProject.slugAsParams.includes("html") ? (
                    <FaHtml5 />
                  ) : aboutProject.slugAsParams.includes("css") ? (
                    <FaCss3Alt />
                  ) : aboutProject.slugAsParams.includes("javascript") ? (
                    <IoLogoJavascript />
                  ) : null}
                  {aboutProject.title}
                </h3>
              </div>
              <p className="mt-2 leading-5 text-muted">
                {aboutProject.description}
              </p>
            </Link>
          )}
        </div>
        <CollaborationAnimation />
      </div>
    </div>
  );
}
