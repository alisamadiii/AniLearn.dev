"use client";

import React, { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { allContents } from "contentlayer/generated";
import Link from "next/link";

import { techs } from "@/utils";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <MotionConfig transition={{ duration: 0.45, type: "spring", bounce: 0 }}>
        <button
          className="relative isolate z-10 h-8 px-4"
          style={{ borderRadius: 6 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.span
            layoutId="menu-text"
            className="inline-block"
            style={{ originY: "0px" }}
          >
            Menu
          </motion.span>
          <motion.div
            layoutId="wrapper"
            className="absolute inset-0 -z-10 bg-background"
            style={{ borderRadius: 6 }}
          />
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <div className="relative flex justify-center">
              <motion.div
                layoutId="wrapper"
                className="absolute top-0 flex h-96 w-[393px] flex-col border border-wrapper bg-background p-1"
                style={{ borderRadius: 12 }}
              >
                {allContents
                  .sort((a, b) => {
                    const getBaseSlug = (slug: string) => {
                      return slug.split("/")[1] || "";
                    };

                    const baseA = getBaseSlug(a.slug);
                    const baseB = getBaseSlug(b.slug);

                    const indexA = techs.includes(baseA)
                      ? techs.indexOf(baseA)
                      : techs.length;
                    const indexB = techs.includes(baseB)
                      ? techs.indexOf(baseB)
                      : techs.length;

                    return indexA - indexB;
                  })
                  .map((content) => (
                    <Link
                      key={content._id}
                      href={content.slug}
                      className="rounded-md px-2 py-1 text-muted duration-100 hover:bg-code-figcaption"
                    >
                      {content.title}
                    </Link>
                  ))}
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
}
