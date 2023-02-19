import React, { useContext } from "react";
import Image from "next/image";

import { ContentsContext } from "@/context/Contents";

import { AiFillStar } from "react-icons/ai";
import { GoPlay } from "react-icons/go";

import HeroIMG from "../assets/hero.png";

import HeadingText from "./HeadingText";
import Link from "next/link";

const developers: {
  id: number;
  name: string;
  img: string;
  twitter: string;
}[] = [
  {
    id: 1,
    name: "Csaba Kissi",
    img: "https://pbs.twimg.com/profile_images/1454861068233228289/6sn9BYOf_400x400.jpg",
    twitter: "https://twitter.com/csaba_kissi",
  },
  {
    id: 2,
    name: "Francesco",
    img: "https://pbs.twimg.com/profile_images/1617044903636123650/pYUcGGOu_400x400.jpg",
    twitter: "https://twitter.com/FrancescoCiull4",
  },
  {
    id: 3,
    name: "Savio ッ",
    img: "https://pbs.twimg.com/profile_images/1617899739172995072/qF-3t5w8_400x400.jpg",
    twitter: "https://twitter.com/saviomartin7",
  },
  {
    id: 4,
    name: "Graham",
    img: "https://pbs.twimg.com/profile_images/1609891169500004353/5ZhB2ZTV_400x400.jpg",
    twitter: "https://twitter.com/GrahamTheDev",
  },
  {
    id: 5,
    name: "Madza",
    img: "https://pbs.twimg.com/profile_images/1526471322762715136/w25QtNnl_400x400.jpg",
    twitter: "https://twitter.com/madzadev",
  },
];

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
          {developers.map((developer) => (
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
