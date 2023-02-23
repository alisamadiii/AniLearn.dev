import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  image: string;
  headline: string;
  link: string;
};

import { AiOutlineLink } from "react-icons/ai";
import HeadingText from "../../HeadingText";

export default function Author({ name, image, headline, link }: Props) {
  return (
    <>
      <HeadingText className="mt-12 mb-2 text-2xl font-bold">
        Author
      </HeadingText>
      <div className="flex flex-col items-center justify-center gap-2 p-4 mb-12 text-center rounded-lg bg-gradient-to-tr from-primary to-[#0055ffa6] text-white">
        <Image
          src={image}
          width={100}
          height={100}
          alt={`Image - ${name}`}
          className="!w-20 !rounded-full !m-0"
        />
        <div>
          <h1 className="text-xl font-medium">{name}</h1>
          <p className="text-sm opacity-60">{headline}</p>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-3 text-2xl"
          >
            <AiOutlineLink />
          </a>
        </div>
      </div>
    </>
  );
}
