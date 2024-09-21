import Image from "next/image";
import React, { useState } from "react";

import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import Wrapper from "@/components/Wrapper";
import { Button } from "@/components/Button";
import { cn } from "@/utils";

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
            src={
              "https://images.unsplash.com/photo-1515266591878-f93e32bc5937?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
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
