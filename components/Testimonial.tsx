import React from "react";
import Image from "next/image";

type Props = {
  data: {
    id: string;
    name: string;
    headline: string;
    img: string;
    order: number;
    star: number;
    testimonial: string;
  };
};

import { AiFillStar } from "react-icons/ai";

export default function Testimonial({ data }: Props) {
  return (
    <div className="bg-white shadow-lg p-4 rounded-lg">
      <div className="flex gap-2 items-center">
        <Image
          className="w-8 h-8 rounded-full"
          src={data.img}
          width={32}
          height={32}
          alt=""
        />
        <div>
          <h1 className="font-medium">{data.name}</h1>
          {data.headline && (
            <h2 className="text-xs opacity-40">{data.headline}</h2>
          )}
        </div>
      </div>
      <div className="flex gap-1 my-2 text-yellow-500 text-xl">
        {[...Array(data.star).keys()].map((i) => (
          <AiFillStar key={i} />
        ))}
      </div>
      <p className="opacity-75">{data.testimonial}</p>
    </div>
  );
}
