import React, { useState } from "react";
import { motion } from "framer-motion";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, {
  BringChanges,
  LiveChanges,
} from "@components/Tech/Workplace";

// you can use these components
import { Information, Range, Dropdown } from "@components/Tech";

type Props = {};

export default function Transition({}: Props) {
  const [isClicked, setIsClicked] = useState(false);
  const [duration, setDuration] = useState(1);
  const [delay, setDelay] = useState(1);

  const onClickHandler = (e: any) => {
    setIsClicked(true);
    e.target.disabled = true;

    setTimeout(() => {
      setIsClicked(false);
      e.target.disabled = false;
    }, duration * 1500 * delay);
  };

  return (
    <>
      <MetaTag title="transition" image={null} description="" />
      <Container>
        <Information content="<h1>transition</h1><p>CSS transitions provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time. For example, if you change the color of an element from white to black, usually the change is instantaneous. With CSS transitions enabled, changes occur at time intervals that follow an acceleration curve, all of which can be customized.</p>" />

        <Workplace className="">
          <BringChanges className="flex flex-col items-start">
            <Dropdown
              name="transition duration"
              lists={[1, 2, 3]}
              unit={"s"}
              stateValue={duration}
              setStateValue={setDuration}
            />
            <Dropdown
              name="transition delay"
              lists={[1, 2, 3]}
              unit={"s"}
              stateValue={delay}
              setStateValue={setDelay}
            />
          </BringChanges>
          <LiveChanges className="">
            <div
              className={`relative w-full p-4 mt-12 space-y-4 overflow-hidden border rounded-lg bg-box border-white-low-opacity flex flex-col ${
                isClicked && "items-end"
              }`}
            >
              <motion.div
                layout
                transition={{ ease: "easeIn", duration, delay }}
                className={`w-24 h-12 md:w-32 md:h-12 bg-primary rounded-md flex items-center justify-center text-white`}
              >
                ease-in
              </motion.div>
              <motion.div
                layout
                transition={{ ease: "easeOut", duration, delay }}
                className={`w-24 h-12 md:w-32 md:h-12 bg-primary rounded-md flex items-center justify-center text-white`}
              >
                ease-out
              </motion.div>
              <motion.div
                layout
                transition={{ ease: "easeInOut", duration, delay }}
                className={`w-24 h-12 md:w-32 md:h-12 bg-primary rounded-md flex items-center justify-center text-white`}
              >
                ease-in-out
              </motion.div>
              <motion.div
                layout
                transition={{ ease: "linear", duration, delay }}
                className={`w-24 h-12 md:w-32 md:h-12 bg-primary rounded-md flex items-center justify-center text-white`}
              >
                linear
              </motion.div>
            </div>
          </LiveChanges>
          <button
            className={`px-4 py-2 mt-3 rounded-md duration-200 ${
              isClicked
                ? "bg-primary text-white cursor-not-allowed"
                : "bg-button"
            }`}
            onClick={(e) => onClickHandler(e)}
          >
            Animate it
          </button>
        </Workplace>
      </Container>
    </>
  );
}
