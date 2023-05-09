import Container from "@layouts/Container";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

import {
  Heading_1,
  Heading_2,
  Paragraph,
} from "@components/Tech/Typography_Tech";

export default function Transition({}: Props) {
  const [isClicked, setIsClicked] = useState(false);
  const [duration, setDuration] = useState(100);

  const onClickHandler = (e: any) => {
    setIsClicked(true);
    e.target.disabled = true;

    setTimeout(() => {
      setIsClicked(false);
      e.target.disabled = false;
    }, duration * 20);
  };

  return (
    <Container className="pt-12 pb-20">
      <small className="text-transparent uppercase bg-gradient-text bg-clip-text">
        transition
      </small>

      <Heading_1>Transition Timing Functions</Heading_1>
      <Paragraph>
        CSS transitions provide a way to control animation speed when changing
        CSS properties. Instead of having property changes take effect
        immediately, you can cause the changes in a property to take place over
        a period of time. For example, if you change the color of an element
        from white to black, usually the change is instantaneous. With CSS
        transitions enabled, changes occur at time intervals that follow an
        acceleration curve, all of which can be customized.
      </Paragraph>

      <Heading_2 margin={true}>Working Place</Heading_2>
      <Paragraph>This is the place where you can try them.</Paragraph>

      <div className="mt-12">
        <Range
          maxNum={200}
          filterName="Duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>

      <div
        className={`relative w-full p-4 mt-12 space-y-4 overflow-hidden border rounded-lg bg-box border-white-low-opacity flex flex-col ${
          isClicked && "items-end"
        }`}
      >
        <motion.div
          layout
          transition={{ ease: "easeIn", duration: duration * 0.01 }}
          className={`w-24 h-12 md:w-32 md:h-12 bg-primary rounded-md flex items-center justify-center text-white`}
        >
          ease-in
        </motion.div>
        <motion.div
          layout
          transition={{ ease: "easeOut", duration: duration * 0.01 }}
          className={`w-24 h-12 md:w-32 md:h-12 bg-primary rounded-md flex items-center justify-center text-white`}
        >
          ease-out
        </motion.div>
        <motion.div
          layout
          transition={{ ease: "easeInOut", duration: duration * 0.01 }}
          className={`w-24 h-12 md:w-32 md:h-12 bg-primary rounded-md flex items-center justify-center text-white`}
        >
          ease-out
        </motion.div>
        <motion.div
          layout
          transition={{ ease: "linear", duration: duration * 0.01 }}
          className={`w-24 h-12 md:w-32 md:h-12 bg-primary rounded-md flex items-center justify-center text-white`}
        >
          linear
        </motion.div>
      </div>
      <button
        className={`px-4 py-2 mt-3 rounded-md duration-200 ${
          isClicked ? "bg-primary text-white cursor-not-allowed" : "bg-button"
        }`}
        onClick={(e) => onClickHandler(e)}
      >
        Animate it
      </button>
    </Container>
  );
}

type RangeProps = {
  maxNum: number;
  filterName: string;
  value: number;
  onChange: (e: any) => void;
};

const Range = ({ maxNum, filterName, value, ...otherProps }: RangeProps) => {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <p className="basis-[200px]">{filterName}</p>
      <div className="grow basis-[500px] range-slider">
        <input
          className="range-slider__range"
          type="range"
          name={filterName}
          value={value}
          max={maxNum}
          {...otherProps}
        />
        <span className="range-slider__value">{(value * 0.01).toFixed(2)}</span>
      </div>
    </div>
  );
};
