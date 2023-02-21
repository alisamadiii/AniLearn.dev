import { DOCS } from "@/content/Details";
import Link from "next/link";
import React from "react";
import Container from "./Container";
import HeadingText from "./HeadingText";

type Props = {};

export default function Docs({}: Props) {
  return (
    <div className="px-4 pb-24 md:px-8">
      <Container>
        <HeadingText className="text-3xl md:text-4xl font-bold leading-[1.5] md:leading-[1.4] my-3">
          We have docs for learning 😀
        </HeadingText>
        <div className="flex flex-wrap justify-center gap-5 pt-12 lg:gap-0 lg:justify-start lg:-space-x-52 pb-28">
          {DOCS.map((doc) => (
            <div
              key={doc.id}
              className="card-hover duration-200 relative w-full max-w-[350px] h-[300px] md:h-[418px] border-2 py-8 px-5 flex flex-col items-start rounded-xl bg-white lg:shadow-card group"
            >
              <HeadingText className="mb-2 text-3xl font-semibold md:text-4xl">
                {doc.technology}
              </HeadingText>
              <p className="text-xl font-bold opacity-75 md:text-2xl">
                {doc.description}
              </p>
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
