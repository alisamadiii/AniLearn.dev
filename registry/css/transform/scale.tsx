import React, { useState } from "react";

import { PreviewWrapper } from "@/components/Wrapper";
import { Slider } from "@/components/slider";

import { Content } from "@/components/transforms-tools";

export default function Scale() {
  const [value, setValue] = useState(0.5);

  return (
    <PreviewWrapper className="space-y-10 py-8">
      <Slider
        defaultValue={[value]}
        max={1.5}
        min={0.5}
        step={0.01}
        onValueChange={(value: any) => {
          setValue(value);
        }}
      />
      <Content style={{ scale: `${value}` }} />
      <small className="inline-block w-full text-center">{value}</small>
    </PreviewWrapper>
  );
}
