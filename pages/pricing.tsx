import React from "react";
import Image from "next/image";
import Head from "next/head";

import Container from "@/components/Container";

type Props = {};

export default function Pricing({}: Props) {
  return (
    <>
      <Head>
        <title>Pricing</title>
        <meta name="description" content="Supporting my work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Container className="pt-36 pb-8 space-y-24 px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <Image
            src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/618ea7afd990103829d614ff_gumroad-logo.svg"
            alt="Gumroad Logo"
            width={"400"}
            height={"300"}
          />
          <div className="rounded-xl overflow-hidden text-base md:text-2xl">
            <ul className="flex justify-between bg-[#EAEAEA]">
              <li className="w-full text-center py-2 font-medium">Price</li>
              <li className="w-full text-center py-2 font-medium">$6</li>
              <li className="w-full text-center py-2 font-medium">$10</li>
            </ul>
            <ul className="flex justify-between text-base md:text-xl">
              <li className="w-full text-center py-2 font-medium">Video</li>
              <li className="w-full text-center py-2 font-medium">✅</li>
              <li className="w-full text-center py-2 font-medium">✅</li>
            </ul>
            <ul className="flex justify-between text-base md:text-xl">
              <li className="w-full text-center py-2 font-medium">
                PowerPoints
              </li>
              <li className="w-full text-center py-2 font-medium">❌</li>
              <li className="w-full text-center py-2 font-medium">✅</li>
            </ul>
            <a
              href="#"
              // target={"_blank"}
              // rel="noreferrer"
              className="text-base inline-block bg-black text-center text-white py-2 px-8 rounded-md shadow-button mt-8"
            >
              Not Available
            </a>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
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
              className="w-full inline-block bg-paypal text-center text-white py-2 px-8 rounded-md shadow-button mt-4"
            >
              Support my work
            </a>
          </div>
        </div>
      </Container>
    </>
  );
}
