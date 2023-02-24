import React from "react";
import Image from "next/image";

import Container from "@/layouts/Container";
import HeadTags from "@/layouts/Head";

type Props = {};

export default function Pricing({}: Props) {
  return (
    <>
      <HeadTags
        title="Pricing"
        banner="https://i.ibb.co/kgCFZXk/Pricing.png"
        description="I appreciate your willingness to support my work, it means a lot to me!"
      />
      <Container className="px-4 pb-8 space-y-24 pt-36 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Image
            src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/618ea7afd990103829d614ff_gumroad-logo.svg"
            alt="Gumroad Logo"
            width={"400"}
            height={"300"}
          />
          <div className="overflow-hidden text-base rounded-xl md:text-2xl">
            <ul className="flex justify-between bg-[#EAEAEA]">
              <li className="w-full py-2 font-medium text-center">Price</li>
              <li className="w-full py-2 font-medium text-center">$6</li>
              <li className="w-full py-2 font-medium text-center">$10</li>
            </ul>
            <ul className="flex justify-between text-base md:text-xl">
              <li className="w-full py-2 font-medium text-center">Video</li>
              <li className="w-full py-2 font-medium text-center">✅</li>
              <li className="w-full py-2 font-medium text-center">✅</li>
            </ul>
            <ul className="flex justify-between text-base md:text-xl">
              <li className="w-full py-2 font-medium text-center">
                PowerPoints
              </li>
              <li className="w-full py-2 font-medium text-center">❌</li>
              <li className="w-full py-2 font-medium text-center">✅</li>
            </ul>
            <a
              href="https://alireza05.gumroad.com/l/animated-content"
              target={"_blank"}
              rel="noreferrer"
              className="inline-block px-8 py-2 mt-8 text-base text-center text-white bg-black rounded-md shadow-button"
            >
              But Now
            </a>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <Image
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c530.png"
            alt="PayPal Logo"
            width={"400"}
            height={"300"}
          />
          <div>
            <p>
              Animated content refers to visual media (e.g. videos, graphics,
              images) that use animation techniques to bring static elements to
              life and create the illusion of motion and change. Animated
              content is often used in marketing, education, and entertainment
              to create engaging, dynamic and memorable experiences.
            </p>
            <a
              href="https://www.paypal.com/paypalme/alirezasamadi"
              target={"_blank"}
              rel="noreferrer"
              className="inline-block w-full px-8 py-2 mt-4 text-center text-white rounded-md bg-paypal shadow-button"
            >
              Support our work
            </a>
          </div>
        </div>
      </Container>
    </>
  );
}
