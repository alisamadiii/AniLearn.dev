import React, { type ChangeEvent, useState } from "react";
import { motion } from "framer-motion";

import { PreviewWrapper } from "@/components/Wrapper";
import Checkbox from "@/components/checkbox";

const initialValue = {
  position: false,
  top: false,
  left: false,
  transformX: false,
  transformY: false,
};

export default function Position() {
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
            name="position"
            checked={value.position}
            onChange={onChangeHandler}
            disabled={value.top || value.left}
          />
          <span className="peer-disabled:cursor-not-allowed peer-disabled:opacity-30">
            position
          </span>
        </label>
        <label className="flex cursor-pointer select-none items-center gap-2">
          <Checkbox
            name="top"
            checked={value.top}
            onChange={onChangeHandler}
            disabled={!value.position}
          />
          <span className="peer-disabled:cursor-not-allowed peer-disabled:opacity-30">
            top
          </span>
        </label>
        <label className="flex cursor-pointer select-none items-center gap-2">
          <Checkbox
            name="left"
            checked={value.left}
            onChange={onChangeHandler}
            disabled={!value.position}
          />
          <span className="peer-disabled:cursor-not-allowed peer-disabled:opacity-30">
            left
          </span>
        </label>
        <label className="flex cursor-pointer select-none items-center gap-2">
          <Checkbox
            name="transformX"
            checked={value.transformX}
            onChange={onChangeHandler}
          />
          <span className="peer-disabled:cursor-not-allowed peer-disabled:opacity-30">
            transformX
          </span>
        </label>
        <label className="flex cursor-pointer select-none items-center gap-2">
          <Checkbox
            name="transformY"
            checked={value.transformY}
            onChange={onChangeHandler}
          />
          <span className="peer-disabled:cursor-not-allowed peer-disabled:opacity-30">
            transformY
          </span>
        </label>
      </div>
      <div className="relative h-52 grow rounded-lg bg-muted/20 p-2 backdrop-blur-3xl dark:bg-muted/10">
        <motion.div
          layout
          animate={{
            position: value.position ? "absolute" : undefined,
            top: value.top ? "50%" : undefined,
            left: value.left ? "50%" : undefined,
            x: value.transformX ? "-50%" : undefined,
            y: value.transformY ? "-50%" : undefined,
          }}
          className="h-8 w-8 rounded-lg bg-foreground"
        />
      </div>
    </PreviewWrapper>
  );
}
