import React, { useEffect, useState } from "react";

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
  const [star, setStar] = useState([]);

  useEffect(() => {
    const starCounting = () => {
      if (!data.star) return;

      let star: any = [];
      for (let i = 1; i <= data.star; i++) {
        star.push(<AiFillStar />);
      }

      setStar(star);
    };

    starCounting();
  }, []);

  return (
    <div className="bg-white shadow-2xl p-4 rounded-lg">
      <div className="flex gap-2 items-center">
        <img className="w-8 h-8 rounded-full" src={data.img} alt="" />
        <div>
          <h1 className="font-medium">{data.name}</h1>
          {data.headline && (
            <h2 className="text-xs opacity-40">{data.headline}</h2>
          )}
        </div>
      </div>
      <div className="flex gap-1 my-2 text-yellow-500 text-xl">
        {star.map(() => (
          <AiFillStar />
        ))}
      </div>
      <p className="opacity-75">{data.testimonial}</p>
    </div>
  );
}
