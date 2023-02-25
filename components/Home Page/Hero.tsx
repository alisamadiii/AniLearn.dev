// Packages
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

// Layouts / Context
import HeadingText from "../../layouts/HeadingText";
import { ContentsContext } from "@/context/Contents";

import { DEVELOPERS } from "@/content/Details";

// Icons / Images
import { AiFillStar } from "react-icons/ai";
import { GoPlay } from "react-icons/go";
import HeroIMG from "@/public/hero.webp";

type Props = {};

export default function Hero({}: Props) {
  const { setIsContentOpen } = useContext(ContentsContext);

  return (
    <div className="flex flex-col items-center pt-48 overflow-hidden bg-black bg-opacity-5 md:rounded-br-full md:shadow-xl">
      <h3 className="text-primary">ANIMATED CONTENT MADE EASY</h3>
      <HeadingText className="text-3xl md:text-5xl font-bold text-center leading-[1.5] md:leading-[1.4]">
        Learning something with animation <br /> doesn&apos;t get easier than
        this
      </HeadingText>
      <h3 className="my-8 opacity-80">Watch video and share them</h3>
      <button
        className="px-8 py-3 text-white duration-150 bg-black rounded-md shadow-button hover:opacity-90 active:scale-95"
        onClick={() => setIsContentOpen(true)}
      >
        Start Watching
      </button>
      <div className="flex items-center gap-4 my-4">
        <div className="flex my-8 space-x-img_overlapping">
          {DEVELOPERS.map((developer) => {
            const { id, name, img, twitter } = developer;
            return (
              <Link
                key={id}
                href={twitter}
                className="duration-100 hover:scale-105 hover:rotate-12"
              >
                <Image
                  src={img}
                  alt=""
                  width={31}
                  height={31}
                  className="border-2 border-white rounded-full"
                />
              </Link>
            );
          })}
        </div>
        <div>
          <div className="flex text-xl text-yellow-500">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p className="text-xs opacity-70">loved by 100+ people</p>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <GoPlay
          className="absolute duration-150 cursor-pointer text-7xl text-primary drop-shadow-2xl animate-pulse hover:scale-125 hover:-rotate-12"
          onClick={() => setIsContentOpen(true)}
        />
        <Image src={HeroIMG} width={1000} height={600} alt="" />
      </div>
    </div>
  );
}
