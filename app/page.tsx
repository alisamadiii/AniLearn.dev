import { buttonVariants } from "@/components/button";
import TechIcons from "@/components/techSVG";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl">
      <header className="relative grid h-screen content-center justify-center gap-16 overflow-hidden">
        <div className="flex flex-col items-center gap-10 px-4 md:-translate-y-8">
          <h1 className="text-center font-display text-5xl md:text-7xl">
            Animation eases learning process.
          </h1>
          <p className="text-center text-xl">
            We offer top-notch content for easy learning, with clear visual
            development principles.
          </p>
          <Link
            href={"/contents"}
            className={buttonVariants({
              variant: "outline",
              className: "px-12 md:w-32 md:px-0",
            })}
          >
            Get started
          </Link>
        </div>
        <div className="flex w-[100vw] justify-center gap-3 md:absolute md:bottom-0 md:left-1/2 md:w-auto md:-translate-x-1/2 md:translate-y-12 md:scale-150">
          <TechIcons tech="html" />
          <TechIcons tech="css" />
          <TechIcons tech="js" />
        </div>
      </header>
    </main>
  );
}
