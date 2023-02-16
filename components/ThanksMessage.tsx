import Image from "next/image";
import React from "react";
import HeadingText from "./HeadingText";

type Props = {};

import Profile from "../assets/profile.jpg";

export default function ThanksMessage({}: Props) {
  return (
    <div className="w-full max-w-[500px] bg-white p-4 shadow-2xl rounded-xl space-y-4">
      <Image src={Profile} width={44} height={44} alt="" />
      <HeadingText className="text-xl font-medium">Thank You 🙏</HeadingText>
      <p className="opacity-80">
        Thank you so much for your support! I appreciate your support and I hope
        you enjoy seeing my content.
      </p>
    </div>
  );
}
