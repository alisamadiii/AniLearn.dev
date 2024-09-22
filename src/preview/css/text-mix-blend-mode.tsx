import Image from "next/image";
import React, { useState } from "react";

import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import Wrapper from "@/components/Wrapper";
import { showcaseImage, showcaseImage2 } from "@/utils";
import { Button } from "@/components/ui/button";

type MixBlendMode =
  | "normal"
  | "multiply"
  | "screen"
  | "overlay"
  | "darken"
  | "lighten"
  | "color-dodge"
  | "color-burn"
  | "hard-light"
  | "soft-light"
  | "difference"
  | "exclusion"
  | "hue"
  | "saturation"
  | "color"
  | "luminosity";

const mixBlends: MixBlendMode[] = [
  "normal",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity",
];

export default function TextMixBlendMode() {
  const [mixBlend, setMixBlend] = useState<MixBlendMode>("normal");

  const codeString = `h1 {
  mix-blend-mode: ${mixBlend};
  -webkit-mix-blend-mode: ${mixBlend};
}`;

  return (
    <div>
      <SyntaxHighlighter language="css">{codeString}</SyntaxHighlighter>
      <Wrapper>
        <div className="absolute inset-0 -z-10">
          <Image
            src={showcaseImage}
            fill
            alt="background-nature-blue"
            objectFit="cover"
          />
        </div>
        <h1
          className="text-6xl font-bold text-white"
          style={{ mixBlendMode: mixBlend }}
        >
          Text Mix Blend
        </h1>
      </Wrapper>
      <Wrapper>
        <div className="absolute aspect-square w-48 -translate-x-12 overflow-hidden rounded-full">
          <Image
            src={showcaseImage}
            fill
            alt="background-nature-blue"
            objectFit="cover"
          />
        </div>
        <div
          className="absolute aspect-square w-48 translate-x-12 overflow-hidden rounded-full"
          style={{ mixBlendMode: mixBlend }}
        >
          <Image
            src={showcaseImage2}
            fill
            alt="background-nature-blue"
            objectFit="cover"
          />
        </div>
      </Wrapper>
      <div className="mb-8 flex flex-wrap gap-2">
        {mixBlends.map((value) => (
          <Button
            key={value}
            variant={value === mixBlend ? "default" : "outline"}
            className="duration-0"
            onClick={() => setMixBlend(value)}
          >
            {value}
          </Button>
        ))}
      </div>
    </div>
  );
}