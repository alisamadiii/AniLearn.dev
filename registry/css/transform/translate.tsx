import React, { useState } from "react";

import { PreviewWrapper } from "@/components/Wrapper";
import { Slider } from "@/components/slider";
import { Content } from "@/components/transforms-tools";

export default function Translate() {
  const [values, setValues] = useState({
    x: 0,
    y: 0,
  });

  const translateValues = ["x", "y"];

  return (
    <PreviewWrapper className="space-y-10 py-8">
      {translateValues.map((translate, index) => (
        <Slider
          key={index}
          defaultValue={[0]}
          max={100}
          min={-100}
          step={1}
          onValueChange={(value: any) => {
            setValues({ ...values, [translate]: value });
          }}
        />
      ))}
      <Content
        style={{ transform: `translate(${values.x}px, ${values.y}px)` }}
      />
      <div>
        <small className="inline-block w-full text-center">
          {values.x} px (x)
        </small>
        <small className="inline-block w-full text-center">
          {values.y} px (y)
        </small>
      </div>
    </PreviewWrapper>
  );
}
