import React, { memo, useState } from "react";
import { BsShadows } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

import { Slider } from "@/components/slider";
import useMeasure from "react-use-measure";
import { type ShadowsType } from "@/app/compare-design/shadow/page";

interface Props {
  shadow: ShadowsType;
  setShadows: (a: ShadowsType[]) => void;
  clipContent: boolean;
}

const ShadowBox = memo(({ shadow, setShadows, clipContent }: Props) => {
  const [ref, { height }] = useMeasure();

  const { x, y, blur, spread, color } = shadow;

  const onChangeHandler = (
    value: any,
    action: "x" | "y" | "blur" | "spread" | "color"
  ) => {
    // @ts-ignore
    setShadows((prev: ShadowsType[]) => {
      return prev.map((p) => {
        if (p.id === shadow.id) {
          return { ...p, [action]: value };
        } else {
          return p;
        }
      });
    });
  };

  console.log(shadow);

  return (
    <motion.div
      className="rounded-xl border bg-white shadow-sm"
      animate={{ height: height > 0 ? height : undefined }}
    >
      <div
        ref={ref}
        className={`flex flex-col items-center justify-center gap-12 p-4 md:p-8 ${clipContent && "overflow-hidden"}`}
      >
        <div
          className="aspect-square w-1/2 rounded-xl"
          style={{
            background: "#263c48",
            boxShadow: `${x}px ${y}px ${blur}px ${spread}px ${color}`,
          }}
        />

        <div className="w-full">
          <div className="flex items-center gap-4">
            <span>x</span>
            <Slider
              defaultValue={[0]}
              min={-100}
              max={100}
              step={1}
              value={[shadow.x]}
              onValueChange={(value: number[]) => {
                onChangeHandler(value[0], "x");
              }}
            />
          </div>
          <div className="flex items-center gap-4">
            <span>y</span>
            <Slider
              defaultValue={[0]}
              min={-100}
              max={100}
              step={1}
              value={[shadow.y]}
              onValueChange={(value: number[]) => {
                onChangeHandler(value[0], "y");
              }}
            />
          </div>
          <div className="flex items-center gap-4">
            <span>blur</span>
            <Slider
              defaultValue={[0]}
              min={0}
              max={100}
              step={1}
              value={[shadow.blur]}
              onValueChange={(value: number[]) => {
                onChangeHandler(value[0], "blur");
              }}
            />
          </div>
          <div className="flex items-center gap-4">
            <span>spread</span>
            <Slider
              defaultValue={[0]}
              min={0}
              max={50}
              step={1}
              value={[shadow.spread]}
              onValueChange={(value: number[]) => {
                onChangeHandler(value[0], "spread");
              }}
            />
          </div>

          {/* <ShadowColor color onShadowColorChange={() => {}} /> */}
        </div>
      </div>
    </motion.div>
  );
});

ShadowBox.displayName = "ShadowBox";

export default ShadowBox;

const popularColors = [
  "#FF5733",
  "#33FF57",
  "#5733FF",
  "#FF33FF",
  "#33FFFF",
  "#FFFF33",
];

const ShadowColor = memo(
  ({
    index,
    onShadowColorChange,
  }: {
    index: number;
    onShadowColorChange: (value: string) => void;
  }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <AnimatePresence mode="popLayout">
          <motion.button
            key={"button"}
            layoutId={`shadow-color-wrapper-${index}`}
            transition={{ duration: 0.5, type: "spring", bounce: 0 }}
            className="mt-4 flex items-center justify-center gap-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.span
              layoutId={`shadow-color-title-${index}`}
              className="flex items-center justify-center gap-2"
            >
              <BsShadows />
              Shadow color
            </motion.span>
          </motion.button>

          {isOpen && (
            <motion.div
              key={"content"}
              transition={{ duration: 0.5, type: "spring", bounce: 0 }}
              className="relative w-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.2 } }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0, type: "spring", bounce: 0 }}
                className="absolute left-0 top-0 h-full w-0.5 rounded-full bg-primary"
              />
              <div className="relative flex h-8 items-center justify-center">
                <motion.h4
                  layoutId={`shadow-color-title-${index}`}
                  className="absolute flex items-center gap-2 text-center text-sm"
                >
                  <BsShadows />
                  Shadow Color
                </motion.h4>
              </div>

              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.2 } }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0, type: "spring", bounce: 0 }}
                className="mt-4 flex flex-wrap gap-1 px-4"
              >
                {popularColors.map((color) => (
                  <li key={color}>
                    <button
                      className="h-8 w-8 rounded"
                      onClick={() => onShadowColorChange(color)}
                      style={{ background: color }}
                    ></button>
                  </li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

ShadowColor.displayName = "ShadowColor";
