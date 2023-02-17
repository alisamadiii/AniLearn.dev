import React from "react";
import HeadingText from "./HeadingText";

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
      className="p-4 inline-block border-2 w-full mb-6 rounded-lg hover:border-primary"
    >
      <div className="flex justify-between items-baseline">
        <HeadingText className="text-2xl font-bold">
          {content.title}
        </HeadingText>
        <p className="text-sm opacity-50 w-24 text-right">{content.date}</p>
      </div>
      <p className="opacity-70 mt-2 mb-4">{content.description}</p>
      <div className="flex justify-between items-center text-sm opacity-50">
        <p>+{formattingNumber(content.views)} views</p>
        <p>{content.duration} m</p>
      </div>
    </a>
  );
}
