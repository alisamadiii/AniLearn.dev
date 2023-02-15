import HeadingText from "@/components/HeadingText";
import Image from "next/image";
import React, { useState } from "react";

type Props = {};

import Profile from "../assets/profile.jpg";
import { AiFillStar } from "react-icons/ai";

export default function AddingTestimonial(props: Props) {
  const [star, setStar] = useState(5);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form
        action=""
        className="w-full max-w-[726px] h-[560px] flex justify-center items-center"
      >
        <div className="w-full max-w-[412px] bg-white absolute p-4 shadow-2xl rounded-xl space-y-3">
          <Image src={Profile} width={44} height={44} alt="" />
          <HeadingText className="text-2xl font-medium">
            Write a text testimonial
          </HeadingText>
          <ul className="list-disc text-sm pl-8">
            <li>What do you like most about me?</li>
            <li>Should I continue making this kind of content?</li>
          </ul>
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
          <textarea
            name=""
            id=""
            rows={6}
            className="w-full outline-none border-2 border-[#CFCFCF] rounded-md p-3"
          ></textarea>
          <button className="w-full text-center bg-black text-white py-2 px-8 rounded-md shadow-button">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
