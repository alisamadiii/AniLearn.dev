import React from "react";

type Props = {
  star: number;
  setStar: (a: number) => void;
};

import { AiFillStar } from "react-icons/ai";

export default function Star({ star, setStar }: Props) {
  return (
    <div className="flex">
      <AiFillStar
        className={`text-2xl ${
          star >= 1 ? "text-yellow-500" : "text-[#c7c7c7]"
        }`}
        onClick={() => setStar(1)}
      />
      <AiFillStar
        className={`text-2xl ${
          star >= 2 ? "text-yellow-500" : "text-[#c7c7c7]"
        }`}
        onClick={() => setStar(2)}
      />
      <AiFillStar
        className={`text-2xl ${
          star >= 3 ? "text-yellow-500" : "text-[#c7c7c7]"
        }`}
        onClick={() => setStar(3)}
      />
      <AiFillStar
        className={`text-2xl ${
          star >= 4 ? "text-yellow-500" : "text-[#c7c7c7]"
        }`}
        onClick={() => setStar(4)}
      />
      <AiFillStar
        className={`text-2xl ${
          star >= 5 ? "text-yellow-500" : "text-[#c7c7c7]"
        }`}
        onClick={() => setStar(5)}
      />
    </div>
  );
}
