import { PreviewWrapper } from "@/components/Wrapper";
import { Box } from "@/components/box";
import { Slider } from "@/components/slider";
import React, { useState } from "react";

const initialValues = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

export default function BorderRadius() {
  const [values, setValues] = useState(initialValues);

  const onValueChangeHandler = (
    position: "top" | "right" | "bottom" | "left",
    value: number
  ) => {
    setValues({ ...values, [position]: value });
  };

  return (
    <PreviewWrapper>
      <Box
        className="mx-auto mb-8 flex h-32 w-32 flex-col items-center justify-center bg-primary"
        style={{
          borderRadius: `${values.top}px ${values.right}px ${values.bottom}px ${values.left}px`,
        }}
      />

      <ul className="grid grid-cols-2 gap-4">
        <li className="flex">
          <span className="w-24">top</span>
          <Slider
            min={0}
            max={100}
            defaultValue={[0]}
            onValueChange={(value) => { onValueChangeHandler("top", value[0]); }}
          />
        </li>
        <li className="flex">
          <span className="w-24">right</span>
          <Slider
            min={0}
            max={100}
            defaultValue={[0]}
            onValueChange={(value) => { onValueChangeHandler("right", value[0]); }}
          />
        </li>
        <li className="flex">
          <span className="w-24">bottom</span>
          <Slider
            min={0}
            max={100}
            defaultValue={[0]}
            onValueChange={(value) => { onValueChangeHandler("bottom", value[0]); }}
          />
        </li>
        <li className="flex">
          <span className="w-24">left</span>
          <Slider
            min={0}
            max={100}
            defaultValue={[0]}
            onValueChange={(value) => { onValueChangeHandler("left", value[0]); }}
          />
        </li>
      </ul>
    </PreviewWrapper>
  );
}
