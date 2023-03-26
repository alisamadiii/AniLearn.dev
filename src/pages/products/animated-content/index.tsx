import React from "react";
import Image from "next/image";
import { TwitterVideoEmbed } from "react-twitter-embed";

type Props = {};

import HeroIMG from "@/assets/Hero img.png";
import GIF from "@/assets/information.gif";
import GIF2 from "@/assets/information2.gif";
import GIF3 from "@/assets/Section 4.gif";

import { FaRegEye } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

import Buttons from "@/components/Buttons";
import Container from "@/layouts/Container";
import Price from "@/components/Price";
import FAQ from "@/components/FAQ";

export default function Index({}: Props) {
  return (
    <>
      <Container className="flex flex-col items-center px-4 py-36">
        <header className="relative text-center" id="hero-section">
          <small className="text-primary">ANIMATED CONTENT MADE EASY</small>
          <h1
            style={{ textShadow: "0 3px 5px rgba(0, 0, 0, .2)" }}
            className="text-[#334155] font-black text-3xl md:text-[5vw] lg:text-6xl leading-tight md:leading-tight lg:leading-tight tracking-tight"
          >
            Learning something with{" "}
            <span className="relative inline-block before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-slate-200 before:-z-10">
              animation
            </span>{" "}
            doesn&lsquo;t get easier than this
          </h1>
          <p className="mt-4 text-sm md:text-lg">
            learn something like a piece of cake
          </p>
          <div className="flex items-center justify-center gap-2 mt-12">
            <Buttons />
            <Price />
          </div>
          <div className="p-4 mt-8">
            <Image
              src={HeroIMG}
              width={2000}
              height={300}
              alt=""
              className="w-full"
            />
          </div>
        </header>

        <section className="grid items-center w-full grid-cols-1 gap-4 mt-24 md:grid-cols-2">
          <div>
            <small className="text-primary">ANIMATION MADE EASY</small>
            <h2 className="text-[#334155] text-4xl font-bold mb-4">
              Let animated content help you
            </h2>
            <p className="text-base md:text-lg">
              We provide you the best content to learn something very easily.
              The visual descriptions of development principles that We creates
              are very clear.
            </p>
            <div className="mt-8">
              <Buttons />
            </div>
          </div>
          <div>
            <Image src={GIF} width={1000} height={1000} alt="" />
          </div>
        </section>

        <section className="py-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl text-slate-700">
            You can learn some main concepts of
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-slate-400">
            <div className="flex items-center gap-2 text-lg font-semibold md:text-xl lg:text-2xl">
              <AiFillHtml5 /> HTML
            </div>
            <div className="flex items-center gap-2 text-lg font-semibold md:text-xl lg:text-2xl">
              <DiCss3 /> CSS
            </div>
            <div className="flex items-center gap-2 text-lg font-semibold md:text-xl lg:text-2xl">
              <SiJavascript /> JavaScript
            </div>
            <div className="flex items-center gap-2 text-lg font-semibold md:text-xl lg:text-2xl">
              <SiTailwindcss /> Tailwind
            </div>
          </div>
          <Image src={GIF3} width={1000} height={1000} alt="" />
        </section>

        <section className="w-full mt-12">
          <h2 className="flex items-center gap-2 text-3xl font-bold md:text-4xl text-slate-700">
            <span className="p-1 text-2xl rounded-md text-primary bg-primary/20">
              <FaRegEye />
            </span>
            Preview
          </h2>
          <div className="grid grid-cols-1 gap-0 mt-8 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TwitterVideoEmbed id={"1635206538603409408"} />
            <TwitterVideoEmbed id={"1616366217438334977"} />
            <TwitterVideoEmbed id={"1623970161408741377"} />
          </div>
        </section>
      </Container>

      <section id="banner" className="relative px-4 py-14 isolate">
        <Container className="flex flex-col-reverse items-center justify-center gap-8 lg:flex-row">
          <div className="max-w-[700px] grow">
            <Image src={GIF2} width={1000} height={1000} alt="" />
          </div>
          <div className="text-slate-900 grow">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Having the video & PowerPoint
            </h2>
            <p className="text-lg md:text-2xl text-slate-800">
              If you want to access the video and source files for learning,
              they are available on Notion.
            </p>
            <button className="px-4 py-2 mt-8 font-bold duration-150 rounded-md shadow-2xl text-slate-700 bg-slate-100 focus:shadow-button">
              Buy Now
            </button>
          </div>
        </Container>
      </section>
      <FAQ />
    </>
  );
}
