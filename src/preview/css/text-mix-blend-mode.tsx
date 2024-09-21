import Image from "next/image";
import React, { useState } from "react";

import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import Wrapper from "@/components/Wrapper";
import { Button } from "@/components/Button";
import { cn, showcaseImage } from "@/utils";

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
      <div className="mb-8 flex flex-wrap gap-2">
        {mixBlends.map((value) => (
          <Button
            key={value}
            variant={"white"}
            className={cn(
              "duration-100",
              mixBlend === value &&
                "bg-foreground text-white hover:bg-opacity-90"
            )}
            onClick={() => setMixBlend(value)}
          >
            {value}
          </Button>
        ))}
      </div>
    </div>
  );
}
