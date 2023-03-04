import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  image: string;
  headline: string;
  link: string;
};

import { AiOutlineLink } from "react-icons/ai";
import HeadingText from "../../../layouts/HeadingText";

export default function Author({ name, image, headline, link }: Props) {
  return (
    <div className="my-12">
      <HeadingText className="mb-4 text-2xl font-bold">Written by</HeadingText>
      <div className="flex flex-col items-center gap-4 md:items-start md:flex-row">
        <Image
          src={image}
          width={200}
          height={200}
          alt={`Image - ${name}`}
          className="!w-24 md:!w-32 !rounded-full !m-0 !shadow-md"
        />
        <div className="text-center md:text-start">
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
    </div>
  );
}
