import React, { type ChangeEvent, useState } from "react";
import { motion } from "framer-motion";

import { PreviewWrapper } from "@/components/Wrapper";
import Checkbox from "@/components/checkbox";
import { Box } from "@/components/box";

const initialValue = {
  width: false,
  margin: false,
};

export default function Margin() {
  const [value, setValue] = useState(initialValue);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setValue({ ...value, [name]: checked });
  };

  return (
    <PreviewWrapper className="flex gap-8">
      <div className="space-y-2">
        <label className="flex cursor-pointer select-none items-center gap-2">
          <Checkbox
            name="width"
            checked={value.width}
            onChange={onChangeHandler}
            // disabled={value.alignItems || value.justifyContent}
          />
          <span className="peer-disabled:cursor-not-allowed peer-disabled:opacity-30">
            width
          </span>
        </label>
        <label className="flex cursor-pointer select-none items-center gap-2">
          <Checkbox
            name="margin"
            checked={value.margin}
            onChange={onChangeHandler}
            // disabled={!value.display}
          />
          <span className="peer-disabled:cursor-not-allowed peer-disabled:opacity-30">
            margin
          </span>
        </label>
      </div>
      <Box
        className="flex"
        style={{ justifyContent: value.margin ? "center" : "start" }}
      >
        <motion.div
          layout
          animate={{
            width: value.width ? "var(--width)" : 32,
          }}
          className="h-8 w-8 rounded-lg bg-foreground [--width:100px] md:[--width:300px]"
        />
      </Box>
    </PreviewWrapper>
  );
}
