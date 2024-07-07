import React from "react";

import TextAnimation from "@/components/home/text-animation";
import Learn from "@/components/home/Learn";
import GradientWave from "@/components/home/gradient-wave";
import CompareDesign from "@/components/home/CompareDesign";

export default function Home() {
  return (
    <main className="isolate flex min-h-dvh flex-col items-center justify-center overflow-hidden px-4 py-32 md:py-0">
      <TextAnimation>
        <h1 className="font-display text-center text-[min(8vw,74px)] tracking-tight text-[#263C48]">
          Learn. Use. Improve
        </h1>
        <p className="mt-5 max-w-xl text-center text-xl font-normal text-[#60727A]">
          We offer top-notch content for easy learning, with clear visual
          development principles.
        </p>
      </TextAnimation>

      <div className="mt-20 flex w-full flex-col items-center justify-center gap-12 md:flex-row">
        <div className="h-96 w-full max-w-96 overflow-hidden rounded-[54px] border-2 border-white bg-[#F9FBFC] shadow-[0_4px_38px_rgba(0,0,0,.03)] duration-300 md:-translate-y-14 md:hover:-translate-y-20">
          <CompareDesign />
        </div>
        <div className="h-96 w-full max-w-96 overflow-hidden rounded-[54px] border-2 border-white bg-[#F9FBFC] shadow-[0_4px_38px_rgba(0,0,0,.03)] duration-300 md:hover:-translate-y-4">
          <Learn />
        </div>
        <div className="h-96 w-full max-w-96 overflow-hidden rounded-[54px] border-2 border-white bg-[#F9FBFC] shadow-[0_4px_38px_rgba(0,0,0,.03)] duration-300 md:-translate-y-6 md:hover:-translate-y-12"></div>
      </div>

      <GradientWave />
    </main>
  );
}
