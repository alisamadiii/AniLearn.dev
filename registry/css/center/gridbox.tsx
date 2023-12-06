import React, { type ChangeEvent, useState } from "react";
import { motion } from "framer-motion";

import { PreviewWrapper } from "@/components/Wrapper";
import Checkbox from "@/components/checkbox";
import { Box } from "@/components/box";

const initialValue = {
  display: false,
  justifyContent: false,
  alignItems: false,
};

export default function Gridbox() {
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
            name="display"
            checked={value.display}
            onChange={onChangeHandler}
            disabled={value.alignItems || value.justifyContent}
          />
          <span className="peer-disabled:cursor-not-allowed peer-disabled:opacity-30">
            display
          </span>
        </label>
        <label className="flex cursor-pointer select-none items-center gap-2">
          <Checkbox
            name="justifyContent"
            checked={value.justifyContent}
            onChange={onChangeHandler}
            disabled={!value.display}
          />
          <span className="peer-disabled:cursor-not-allowed peer-disabled:opacity-30">
            justify-content
          </span>
        </label>
        <label className="flex cursor-pointer select-none items-center gap-2">
          <Checkbox
            name="alignItems"
            checked={value.alignItems}
            onChange={onChangeHandler}
            disabled={!value.display}
          />
          <span className="peer-disabled:cursor-not-allowed peer-disabled:opacity-30">
            align-items
          </span>
        </label>
      </div>
      <Box
        style={{
          display: value.display ? "flex" : undefined,
          justifyContent: value.justifyContent ? "center" : undefined,
          alignItems: value.alignItems ? "center" : undefined,
        }}
      >
        <motion.div layout className="h-8 w-8 rounded-lg bg-foreground" />
      </Box>
    </PreviewWrapper>
  );
}
