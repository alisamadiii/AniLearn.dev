import { PreviewWrapper } from "@/components/Wrapper";
import { Box } from "@/components/box";
import { Slider } from "@/components/slider";
import React, { useState } from "react";

export default function WholeBorderRadius() {
  const [value, setValue] = useState(10);

  const onValueChangeHandler = (value: number) => {
    setValue(value);
  };

  return (
    <PreviewWrapper>
      <Box
        className="mx-auto mb-8 flex h-32 w-32 flex-col items-center justify-center bg-primary"
        style={{
          borderRadius: value,
        }}
      >
        <p className="text-xs">{value}px</p>
      </Box>

      <div className="flex">
        <span className="w-24">Value</span>
        <Slider
          min={0}
          max={100}
          defaultValue={[value]}
          onValueChange={(value) => {
            onValueChangeHandler(value[0]);
          }}
        />
      </div>

      {value >= 65 && (
        <>
          <p className="mt-4 text-sm text-muted">
            By 65px, you will get a circle, because it depends how big your
            shape is.
          </p>
          <p className="mt-1 text-sm text-muted">
            You still can go over it but won&apos;t do anything :)
          </p>
        </>
      )}
    </PreviewWrapper>
  );
}
