import React, { type ChangeEvent, useState } from "react";
import { motion } from "framer-motion";

import { PreviewWrapper } from "@/components/Wrapper";
import Checkbox from "@/components/checkbox";
import { Box } from "@/components/box";

const initialValue = {
  display: false,
  placeItems: false,
};

export default function Gridbox2() {
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
            disabled={value.placeItems}
          />
          <span className="peer-disabled:cursor-not-allowed peer-disabled:opacity-30">
            display
          </span>
        </label>
        <label className="flex cursor-pointer select-none items-center gap-2">
          <Checkbox
            name="placeItems"
            checked={value.placeItems}
            onChange={onChangeHandler}
            disabled={!value.display}
          />
          <span className="peer-disabled:cursor-not-allowed peer-disabled:opacity-30">
            place-items
          </span>
        </label>
      </div>
      <Box
        style={{
          display: value.display ? "grid" : undefined,
          placeItems: value.placeItems ? "center" : undefined,
        }}
      >
        <motion.div layout className="h-8 w-8 rounded-lg bg-foreground" />
      </Box>
    </PreviewWrapper>
  );
}
