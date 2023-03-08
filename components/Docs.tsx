import { DOCS } from "@/content/Details";
import Link from "next/link";
import React from "react";
import Container from "../layouts/Container";
import HeadingText from "../layouts/HeadingText";

type Props = {
  headingText: string;
  paragraph?: string;
};

export default function Docs({ headingText, paragraph }: Props) {
  return (
    <div className="px-4 pb-24 overflow-hidden md:px-8">
      <Container>
        <HeadingText className="text-3xl md:text-4xl font-bold leading-[1.5] md:leading-[1.4] my-3">
          {headingText}
        </HeadingText>
        {paragraph && (
          <p className="text-xl font-medium opacity-80">{paragraph}</p>
        )}
        <div className="flex flex-wrap justify-center gap-5 pt-12 lg:gap-0 lg:justify-start lg:-space-x-52 pb-28">
          {DOCS.map((doc) => (
            <div
              key={doc.id}
              className="card-hover duration-200 relative w-full max-w-[350px] h-[300px] md:h-[418px] border-2 py-8 px-5 flex flex-col items-start rounded-xl bg-white lg:shadow-card group"
            >
              <HeadingText className="mb-2 text-3xl font-semibold md:text-4xl group-hover:text-white">
                {doc.technology}
              </HeadingText>
              <p className="text-xl md:text-2xl">{doc.description}</p>
              <Link
                href={doc.link}
                className="px-5 py-2 mt-auto font-medium text-white rounded-lg bg-primary group-hover:bg-white group-hover:text-black"
              >
                Read Now
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
