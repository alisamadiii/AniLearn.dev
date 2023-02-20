import React, { useContext } from "react";
import Image from "next/image";

import { ContentsContext } from "@/context/Contents";

import { AiFillStar } from "react-icons/ai";
import { GoPlay } from "react-icons/go";

import HeroIMG from "../assets/hero.webp";

import HeadingText from "./HeadingText";
import Link from "next/link";

import { DEVELOPERS } from "@/content/Details";

type Props = {};

export default function Hero({}: Props) {
  const { setIsContentOpen } = useContext(ContentsContext);

  return (
    <div className="pt-48 flex flex-col items-center bg-black bg-opacity-5">
      <h3 className="text-primary">ANIMATED CONTENT MADE EASY</h3>
      <HeadingText className="text-3xl md:text-5xl font-bold text-center leading-[1.5] md:leading-[1.4]">
        Learning something with animation <br /> doesn&apos;t get easier than
        this
      </HeadingText>
      <h3 className="opacity-80 my-8">Watch video and share them</h3>
      <button
        className="bg-black text-white py-3 px-8 rounded-md shadow-button hover:opacity-90 active:scale-95 duration-150"
        onClick={() => setIsContentOpen(true)}
      >
        Start Watching
      </button>
      <div className="flex items-center gap-4 my-4">
        <div className="flex my-8 space-x-img_overlapping">
          {DEVELOPERS.map((developer) => (
            <Link
              key={developer.id}
              href={developer.twitter}
              className="hover:scale-105 hover:rotate-12 duration-100"
            >
              <Image
                src={developer.img}
                alt=""
                width={31}
                height={31}
                className="rounded-full border-2 border-white"
              />
            </Link>
          ))}
        </div>
        <div>
          <div className="flex text-yellow-500 text-xl">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <p className="text-xs opacity-70">loved by 100+ people</p>
        </div>
      </div>
      <div className="relative flex justify-center items-center">
        <GoPlay
          className="absolute text-7xl text-primary drop-shadow-2xl cursor-pointer animate-pulse hover:scale-125 hover:-rotate-12 duration-150"
          onClick={() => setIsContentOpen(true)}
        />
        <Image src={HeroIMG} width={1000} height={600} alt="" />
      </div>
    </div>
  );
}
