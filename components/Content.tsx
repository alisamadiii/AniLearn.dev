import React from "react";
import HeadingText from "../layouts/HeadingText";

import { OneContent } from "@/types/Contents";

type Props = {
  content: OneContent;
};

export default function Content({ content }: Props) {
  const {
    title,
    description,
    date,
    duration,
    link,
    views,
    free,
    twitter,
    youtube,
  } = content;

  const formattingNumber = (value: number) => {
    const formatter = Intl.NumberFormat("en", { notation: "compact" });
    let n = formatter.format(value);
    return n;
  };

  return (
    <a
      href={youtube == null ? twitter : youtube}
      target={"_blank"}
      rel="noreferrer"
      className="inline-block w-full p-4 mb-6 border-2 rounded-lg hover:border-primary"
    >
      <div className="flex items-baseline justify-between">
        <HeadingText className="text-2xl font-bold">{title}</HeadingText>
        <p className="w-24 text-sm text-right opacity-50">{date}</p>
      </div>
      <p className="mt-2 mb-4 opacity-70">{description}</p>
      <div className="flex items-center justify-between text-sm opacity-50">
        <p>+{formattingNumber(views)} views</p>
        <p>{duration} m</p>
      </div>
    </a>
  );
}
