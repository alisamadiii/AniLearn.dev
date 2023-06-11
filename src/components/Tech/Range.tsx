import React from "react";
import { motion } from "framer-motion";

type Props = {
  maxNum: number;
  minNum?: number;
  filterName: string;
  value: number;
  onChange: (e: any) => void;
};

export default function Range({
  maxNum,
  minNum,
  filterName,
  value,
  ...otherProps
}: Props) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <p className="basis-[200px]">{filterName}</p>
      <div className="grow basis-[500px] flex items-center gap-4">
        <input
          className="w-full h-4 overflow-hidden rounded-full appearance-none bg-box range-slider__range"
          type="range"
          name={filterName}
          value={value}
          min={minNum ? minNum : 0}
          max={maxNum}
          {...otherProps}
        />
        <motion.span
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 1 }}
          key={value}
          className="text-right range-slider__value basis-28"
        >
          {value}
        </motion.span>
      </div>
    </div>
  );
}
