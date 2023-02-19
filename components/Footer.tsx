import Image from "next/image";
import React from "react";
import Container from "./Container";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="w-full py-8 px-4 md:px-8 absolute bottom-0 left-0">
      <Container className="flex gap-2 items-center md:text-xl">
        <h1 className="font-medium opacity-80">Developed by </h1>
        <a
          href="#"
          className="inline-block rounded-full overflow-hidden border-2"
        >
          <Image
            src="https://pbs.twimg.com/profile_images/1598932468492476416/tTkHaLF7_400x400.jpg"
            width={50}
            height={50}
            alt=""
          />
        </a>
      </Container>
    </div>
  );
}
