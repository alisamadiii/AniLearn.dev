import Buttons from "@/components/Buttons";
import Container from "@/layouts/Container";
import React from "react";
import Image from "next/image";

type Props = {};

import HeroIMG from "@/assets/Hero img.png";
import GIF from "@/assets/information.gif";

export default function AnimatedContent({}: Props) {
  return (
    <Container className="flex flex-col items-center px-4 py-36">
      <header className="text-center">
        <small className="text-primary">ANIMATED CONTENT MADE EASY</small>
        <h1 className="text-[#334155] font-black text-3xl md:text-[5vw] lg:text-6xl md:leading-tight lg:leading-tight tracking-tight">
          Learning something with animation doesn&lsquo;t get easier than this
        </h1>
        <p className="mt-4 text-sm md:text-lg">
          learn something like a piece of cake
        </p>
        <div className="mt-12">
          <Buttons />
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

      <section className="grid w-full grid-cols-1 gap-4 mt-24 md:grid-cols-2">
        <div>
          <small className="text-primary">ANIMATION MADE EASY</small>
          <h2 className="text-[#334155] text-3xl font-bold mb-4">
            Let animated content help you
          </h2>
          <p>
            We provide you the best content to learn something very easily. The
            visual descriptions of development principles that We creates are
            very clear.
          </p>
        </div>
        <div className="bg-red-800">
          <Image src={GIF} width={1000} height={10000} alt="" />
        </div>
      </section>
    </Container>
  );
}
