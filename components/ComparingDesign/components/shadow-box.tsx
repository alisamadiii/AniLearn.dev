import { useRouter, useSearchParams } from "next/navigation";
import React, { memo, useEffect, useState } from "react";
import { BsShadows } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";

import { Slider } from "@/components/slider";
import { extractNumbersFromString, gettingSearchParams } from "@/utils";
import useMeasure from "react-use-measure";

type Props = { index: number; clipContent: boolean };

export default function ShadowBox({ index, clipContent }: Props) {
  const searchParams = useSearchParams();
  const color = useSearchParams().get("color");

  const [shadow, setShadow] = useState<string[]>(
    gettingSearchParams(searchParams, `shadow-${index}`)?.split(" ") || ["0"]
  );

  const [ref, { height }] = useMeasure();

  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = new URLSearchParams(Array.from(searchParams.entries()));

      current.set(`shadow-${index}`, shadow.toString().replaceAll(/,/g, " "));

      router.push(`compare-design?${current}`, { scroll: false });
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [shadow]);

  const onChangeHandler = (
    value: any,
    action: "x" | "y" | "blur" | "spread" | "color"
  ) => {
    let newValue = [...shadow];

    if (action === "x") {
      newValue[0] = `${value}px`;
    } else if (action === "y") {
      newValue[1] = `${value}px`;
    } else if (action === "blur") {
      newValue[2] = `${value}px`;
    } else if (action === "spread") {
      newValue[3] = `${value}px`;
    } else if (action === "color") {
      newValue[4] = value;
    }

    setShadow(newValue);
  };

  const onShadowColorChange = (value: string) => {
    let newValue = [...shadow];

    newValue[4] = value;

    setShadow(newValue);
  };

  console.log(shadow.toString().replaceAll(/,/g, " "));

  return (
    <motion.div
      className="rounded-xl border bg-white shadow-sm"
      animate={{ height: height > 0 ? height : undefined }}
    >
      <div
        ref={ref}
        key={index}
        className={`flex flex-col items-center justify-center gap-12 p-4 md:p-8 ${clipContent && "overflow-hidden"}`}
      >
        <div
          className="aspect-square w-1/2 rounded-xl"
          style={{
            background: `#${color}` || "#263c48",
            boxShadow: shadow.toString().replaceAll(/,/g, " "),
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
              value={[extractNumbersFromString(shadow[0])[0]]}
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
              value={[extractNumbersFromString(shadow[1])[0]]}
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
              value={[extractNumbersFromString(shadow[2])[0]]}
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
              value={[extractNumbersFromString(shadow[3])[0]]}
              onValueChange={(value: number[]) => {
                onChangeHandler(value[0], "spread");
              }}
            />
          </div>

          <ShadowColor
            index={index}
            onShadowColorChange={onShadowColorChange}
          />
        </div>
      </div>
    </motion.div>
  );
}

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
                  <li>
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
