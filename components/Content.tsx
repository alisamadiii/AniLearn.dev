import React from "react";
import HeadingText from "../layouts/HeadingText";

type Props = {
  content: {
    title: string;
    description: string;
    date: string;
    views: number;
    duration: number;
    twitter: string;
    youtube: null | string;
    link: string;
    free: boolean;
  };
};

export default function Content({ content }: Props) {
  const formattingNumber = (value: number) => {
    const formatter = Intl.NumberFormat("en", { notation: "compact" });
    let n = formatter.format(value);
    return n;
  };

  return (
    <a
      href={content.twitter}
      target={"_blank"}
      rel="noreferrer"
      className="inline-block w-full p-4 mb-6 border-2 rounded-lg hover:border-primary"
    >
      <div className="flex items-baseline justify-between">
        <HeadingText className="text-2xl font-bold">
          {content.title}
        </HeadingText>
        <p className="w-24 text-sm text-right opacity-50">{content.date}</p>
      </div>
      <p className="mt-2 mb-4 opacity-70">{content.description}</p>
      <div className="flex items-center justify-between text-sm opacity-50">
        <p>+{formattingNumber(content.views)} views</p>
        <p>{content.duration} m</p>
      </div>
    </a>
  );
}
