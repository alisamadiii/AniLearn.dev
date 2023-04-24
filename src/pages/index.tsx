import React, { useState } from "react";
import Image from "next/image";
import { TwitterVideoEmbed } from "react-twitter-embed";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";

type Props = {};

import HeroIMG from "@/assets/Hero img.png";
import GIF from "@/assets/information.gif";
import GIF2 from "@/assets/information2.gif";
import GIF3 from "@/assets/Section 4.gif";

import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { SiTailwindcss, SiJavascript } from "react-icons/si";

import Buttons from "@/components/Buttons";
import Container from "@/layouts/Container";
import Price from "@/components/Price";
import FAQ from "@/components/FAQ";
import { FAQ_DATA } from "@/contents/FAQ";
import Pricing from "@/components/Pricing";
import { TESTIMONIAL } from "@/contents/Testimonial";
import Testimonial from "@/components/Testimonial";
import BannerBG from "@/assets/Banner-bg";

const breakpointColumnsObj = {
  default: 3,
  992: 3,
  768: 2,
  576: 1,
};

export default function Index({}: Props) {
  const [faqNum, setFaqNum] = useState<number>(1);

  return (
    <>
      {/* <BannerBG /> */}
      <Container className="relative flex flex-col items-center px-4 pt-36">
        <header className="relative text-center" id="hero-section">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-primary"
          >
            ANIMATED CONTENT MADE EASY
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            style={{ textShadow: "0 3px 5px rgba(0, 0, 0, .2)" }}
            className="text-[#334155] font-black text-3xl md:text-[5vw] lg:text-6xl leading-tight md:leading-tight lg:leading-tight tracking-tight"
          >
            Learning something with{" "}
            <span className="relative inline-block before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-slate-200 before:-z-10">
              animation
            </span>{" "}
            doesn&lsquo;t get easier than this
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-4 text-sm md:text-lg"
          >
            learn something like a piece of cake
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex items-center justify-center gap-2 mt-12"
          >
            <Buttons />
            <Price />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="p-4 mt-8"
          >
            <Image
              src={HeroIMG}
              width={2000}
              height={300}
              alt=""
              className="w-full"
            />
          </motion.div>
        </header>

        <section className="grid items-center w-full grid-cols-1 gap-4 mt-24 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <Image src={GIF} width={1000} height={1000} alt="" />
          </motion.div>
        </section>

        <section className="py-12 text-center">
          <h2 className="mb-8 text-3xl font-bold text-center text-slate-700">
            You can learn some main concepts of
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-slate-400">
            <div className="flex items-center gap-2 text-lg font-semibold md:text-xl lg:text-xl">
              <AiFillHtml5 /> HTML
            </div>
            <div className="flex items-center gap-2 text-lg font-semibold md:text-xl lg:text-xl">
              <DiCss3 /> CSS
            </div>
            <div className="flex items-center gap-2 text-lg font-semibold md:text-xl lg:text-xl">
              <SiJavascript /> JavaScript
            </div>
            <div className="flex items-center gap-2 text-lg font-semibold md:text-xl lg:text-xl">
              <SiTailwindcss /> Tailwind
            </div>
          </div>
          <Image src={GIF3} width={1000} height={1000} alt="" />
        </section>

        <section className="w-full mt-12" id="preview">
          <h2 className="mb-8 text-3xl font-bold text-center text-slate-700">
            Preview
          </h2>
          <div className="grid grid-cols-1 gap-0 mt-8 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <TwitterVideoEmbed id={"1635206538603409408"} />
            <TwitterVideoEmbed id={"1616366217438334977"} />
            <TwitterVideoEmbed id={"1623970161408741377"} />
          </div>
        </section>
      </Container>

      <section id="pricing" className="my-24">
        <h2 className="mb-8 text-3xl font-bold text-center text-slate-700">
          Pricing
        </h2>
        <Pricing />
      </section>

      <section id="faq">
        <h2 className="mb-8 text-3xl font-bold text-center text-slate-700">
          Frequently Asked Questions
        </h2>
        <Container className="px-4 pb-24">
          {FAQ_DATA.map((faq) => (
            <FAQ
              key={faq.num}
              faq={faq}
              faqNum={faqNum}
              setFaqNum={setFaqNum}
            />
          ))}
        </Container>
      </section>

      <section id="faq" className="pb-24">
        <h2 className="mb-8 text-3xl font-bold text-center text-slate-700">
          Testimonial
        </h2>
        <Container className="px-4">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {TESTIMONIAL.map((message) => (
              <Testimonial key={message.num} testimonial={message} />
            ))}
          </Masonry>
        </Container>
      </section>
    </>
  );
}
