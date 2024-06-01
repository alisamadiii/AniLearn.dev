"use client";

import React from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";

import ContributeLabel from "@/components/contribute-label";
import GridBackground from "@/components/grid-background";
import Shadow from "@/components/ComparingDesign/intro/shadow";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import ShadowSubject from "@/components/ComparingDesign/Each-Subject/shadow.subject";

export default function CompareDesign() {
  const subject = useSearchParams().get("subject");

  return (
    <div className="mx-auto mt-content-top flex max-w-7xl flex-col items-center px-4 pt-4">
      <GridBackground />

      <ContributeLabel />

      <MotionConfig transition={{ duration: 0.2 }}>
        <AnimatePresence initial={false} mode="wait">
          {subject ? (
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={`subject-${subject}`}
              layout="position"
              className="text-center text-4xl font-bold capitalize"
            >
              {subject}
            </motion.h2>
          ) : (
            <motion.h2
              key={"no-subject"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-4xl font-bold"
            >
              Comparing
            </motion.h2>
          )}
        </AnimatePresence>

        <div className="flex h-24 items-center justify-center">
          <AnimatePresence initial={false}>
            {!subject && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.2 } }}
                exit={{ opacity: 0 }}
                className="max-w-xl text-center text-muted"
              >
                If you are looking to compare designs in order to choose the
                best one, then you can use these tools that are available now.
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence initial={false} mode="wait">
          {subject ? (
            <motion.div
              key={"each-subject"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full max-w-2xl"
            >
              {subject === "shadow" ? <ShadowSubject /> : null}
            </motion.div>
          ) : (
            <motion.div
              layout
              key={"subject-lists"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3"
            >
              <Link
                href={{
                  pathname: "/compare-design",
                  query: {
                    subject: "shadow",
                    squares: "2",
                    color: "263c48",
                    "shadow-1": "0px 0px 20px 0px #263c4871",
                    "shadow-2": "0px 0px 20px 0px #263c4871",
                  },
                }}
                className="rounded-xl bg-white"
              >
                <Shadow />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </div>
  );
}
