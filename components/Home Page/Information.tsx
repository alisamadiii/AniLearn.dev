import React, { useContext } from "react";

import Container from "../../layouts/Container";
import HeadingText from "../../layouts/HeadingText";

import { ContentsContext } from "@/context/Contents";

type Props = {};

import { BsCheckAll } from "react-icons/bs";

export default function Information({}: Props) {
  const { setIsContentOpen } = useContext(ContentsContext);

  return (
    <div className="px-4 py-36 md:px-8">
      <Container className="grid gap-8 lg:grid-cols-2 lg:gap-4">
        <div>
          <h3 className="text-primary">ANIMATION MADE EASY</h3>
          <HeadingText className="text-3xl md:text-4xl leading-[1.5] md:leading-[1.4] my-3 font-extrabold tracking-tight">
            Let animated content help you
          </HeadingText>
          <p className="text-lg">
            We provide the best content to learn something very easily. The
            visual descriptions of development principles that We create are
            very clear.
          </p>
          <ul className="my-8 text-base md:text-lg">
            <li className="flex items-center gap-2">
              <BsCheckAll className="text-xl text-green-600" />
              They are very short
            </li>
            <li className="flex items-center gap-2">
              <BsCheckAll className="text-xl text-green-600" />
              Making content for HTML, CSS & JS
            </li>
            <li className="flex items-center gap-2">
              <BsCheckAll className="text-xl text-green-600" />
              They are free
            </li>
          </ul>
          <button
            className="px-8 py-2 text-white duration-150 bg-black rounded-md shadow-button hover:opacity-90 active:scale-95 button-focus"
            onClick={() => setIsContentOpen(true)}
          >
            Start Watching
          </button>
        </div>
        <div className="w-full h-[291px] sm:h-[491px] md:h-[591px] bg-slide-animation bg-cover rounded-xl"></div>
      </Container>
    </div>
  );
}
