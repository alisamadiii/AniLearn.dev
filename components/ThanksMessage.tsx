import Image from "next/image";
import React from "react";
import HeadingText from "../layouts/HeadingText";

type Props = {};

import Profile from "../public/profile.jpg";

export default function ThanksMessage({}: Props) {
  return (
    <div className="w-full max-w-[500px] bg-white p-4 shadow-2xl rounded-xl space-y-4">
      <Image src={Profile} width={44} height={44} alt="" />
      <HeadingText className="text-xl font-medium">Thank You 🙏</HeadingText>
      <p className="opacity-80">
        Thank you for your support! Your encouragement means a lot to me, and I
        hope you find my content enjoyable and informative.
      </p>
    </div>
  );
}
