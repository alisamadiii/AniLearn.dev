import React from "react";
import Image from "next/image";

import Container from "../layouts/Container";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="absolute bottom-0 left-0 w-full px-4 py-8 md:px-8">
      <Container className="flex items-center gap-2 md:text-xl">
        <h1 className="font-medium opacity-80">Developed by </h1>
        <a
          href="#"
          className="inline-block overflow-hidden border-2 rounded-full"
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
