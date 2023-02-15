import Container from "@/components/Container";
import React from "react";
import Image from "next/image";

type Props = {};

function Pricing({}: Props) {
  return (
    <Container className="pt-36 pb-8 space-y-24 px-4 md:px-8">
      <div className="grid md:grid-cols-2 gap-8">
        <Image
          src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/618ea7afd990103829d614ff_gumroad-logo.svg"
          alt=""
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
            <li className="w-full text-center py-2 font-medium">PowerPoints</li>
            <li className="w-full text-center py-2 font-medium">❌</li>
            <li className="w-full text-center py-2 font-medium">✅</li>
          </ul>
          <a
            href="#"
            target={"_blank"}
            className="text-base inline-block bg-black text-center text-white py-2 px-8 rounded-md shadow-button mt-8"
          >
            Buy Now
          </a>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Image
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c530.png"
          alt=""
          width={"400"}
          height={"300"}
        />
        <div>
          <p>
            Animated content refers to visual media (e.g. videos, graphics,
            images) that use animation techniques to bring static elements to
            life and create the illusion of motion and change. Animated content
            is often used in marketing, education, and entertainment to create
            engaging, dynamic and memorable experiences.
          </p>
          <a
            href="https://www.paypal.com/paypalme/alirezasamadi"
            target={"_blank"}
            className="w-full inline-block bg-[#002C8A] text-center text-white py-2 px-8 rounded-md shadow-button mt-4"
          >
            Support my work
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Pricing;
