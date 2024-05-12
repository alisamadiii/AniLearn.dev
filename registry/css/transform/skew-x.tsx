import React, { useState } from "react";

import { PreviewWrapper } from "@/components/Wrapper";
import { Slider } from "@/components/slider";

import { Content } from "@/components/transforms-tools";

export default function SkewX() {
  const [value, setValue] = useState(0);

  return (
    <PreviewWrapper className="space-y-10 py-8">
      <Slider
        defaultValue={[value]}
        max={360}
        step={1}
        onValueChange={(value: any) => {
          setValue(value);
        }}
      />
      <Content style={{ transform: `skewX(${value}deg)` }} />
      <small className="inline-block w-full text-center">{value} deg°</small>
    </PreviewWrapper>
  );
}
