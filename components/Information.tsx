import React from "react";
import Container from "./Container";
import HeadingText from "./HeadingText";

type Props = {};

import { BsCheckAll } from "react-icons/bs";

export default function Information({}: Props) {
  return (
    <div className="py-36 px-4 md:px-8">
      <Container className="grid lg:grid-cols-2 gap-8 lg:gap-4">
        <div>
          <h3 className="text-primary">ANIMATION MADE EASY</h3>
          <HeadingText className="text-3xl md:text-4xl font-bold leading-[1.5] md:leading-[1.4] my-3">
            Let animated content to help you
          </HeadingText>
          <p className="text-lg opacity-70">
            We provide you the best content to learn something very easily. The
            visual descriptions of development principles that We creates are
            very clear.
          </p>
          <ul className="my-8 opacity-70 text-base md:text-lg">
            <li className="flex gap-2 items-center">
              <BsCheckAll className="text-xl text-green-600" />
              They are very short
            </li>
            <li className="flex gap-2 items-center">
              <BsCheckAll className="text-xl text-green-600" />
              Making content for HTML, CSS & JS
            </li>
            <li className="flex gap-2 items-center">
              <BsCheckAll className="text-xl text-green-600" />
              They are free
            </li>
          </ul>
          <button className="bg-black text-white py-2 px-8 rounded-md shadow-button">
            Start Watching
          </button>
        </div>
        <div className="w-full h-[291px] sm:h-[491px] md:h-[591px] bg rounded-xl"></div>
      </Container>
    </div>
  );
}
