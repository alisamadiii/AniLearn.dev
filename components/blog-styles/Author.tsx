import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  image: string;
  headline: string;
  social_link: string;
};

export default function Author({ name, image, headline, social_link }: Props) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={image}
        width={100}
        height={100}
        alt={`Image - ${name}`}
        className="!w-20 !rounded-full"
      />
      <div>
        <h1 className="text-xl font-medium">{name}</h1>
        <p className="text-sm opacity-60">{headline}</p>
        <a href={social_link}>Social Media</a>
      </div>
    </div>
  );
}
