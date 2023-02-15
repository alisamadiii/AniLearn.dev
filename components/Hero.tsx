import React from "react";
import Image from "next/image";

type Props = {};

import { AiFillStar } from "react-icons/ai";
import { GoPlay } from "react-icons/go";

import HeroIMG from "../assets/hero.png";
import HeadingText from "./HeadingText";

const developers: {
  id: number;
  name: string;
  img: string;
}[] = [
  {
    id: 1,
    name: "Csaba Kissi",
    img: "https://pbs.twimg.com/profile_images/1454861068233228289/6sn9BYOf_400x400.jpg",
  },
  {
    id: 2,
    name: "Francesco",
    img: "https://pbs.twimg.com/profile_images/1617044903636123650/pYUcGGOu_400x400.jpg",
  },
  {
    id: 3,
    name: "Savio ッ",
    img: "https://pbs.twimg.com/profile_images/1617899739172995072/qF-3t5w8_400x400.jpg",
  },
  {
    id: 4,
    name: "Graham",
    img: "https://pbs.twimg.com/profile_images/1609891169500004353/5ZhB2ZTV_400x400.jpg",
  },
  {
    id: 5,
    name: "Madza",
    img: "https://pbs.twimg.com/profile_images/1526471322762715136/w25QtNnl_400x400.jpg",
  },
];

export default function Hero({}: Props) {
  return (
    <div className="pt-48 flex flex-col items-center bg-[#000000] bg-opacity-5">
      <h3 className="text-primary">ANIMATED CONTENT MADE EASY</h3>
      <HeadingText className="text-3xl md:text-5xl font-bold text-center leading-[1.5] md:leading-[1.4]">
        Learning something with animation <br /> doesn&apos;t get easier than
        this
      </HeadingText>
      <h3 className="opacity-80 my-8">Watch video and share them</h3>
      <button className="bg-black text-white py-3 px-8 rounded-md shadow-button">
        Start Watching
      </button>
      <div className="flex items-center gap-4 my-4">
        <div className="flex my-8 space-x-[-10px]">
          {developers.map((developer) => (
            <Image
              key={developer.id}
              src={developer.img}
              alt=""
              width={31}
              height={31}
              className="rounded-full border-2 border-white"
            />
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
        <GoPlay className="absolute text-7xl text-primary drop-shadow-2xl cursor-pointer animate-pulse" />
        <Image src={HeroIMG} width={1000} height={600} alt="" />
      </div>
    </div>
  );
}
