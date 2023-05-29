import React, { useState } from "react";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

import Workplace, { LiveChanges, BringChanges } from "..";
import Checkbox from "@components/Checkbox";
import Input from "@components/Tech/Input";

type Props = {};

export default function FlexWrap({}: Props) {
  const [flexWrap, setFlexWrap] = useState<boolean>(false);
  const [flexGrow, setFlexGrow] = useState<boolean>(false);
  const [flexBasis, setFlexBasis] = useState<number>(200);

  const [playground, { width: playgroundWidth }] = useMeasure();

  const onChangeHandler = (e: any) => {
    return e.target.value == 0
      ? setFlexBasis(200)
      : setFlexBasis(Number(e.target.value));
  };

  return (
    // All your code must be inside the Workplace for writing a clean codes
    // You can utility classes. (optional)

    <Workplace className="">
      <LiveChanges>
        <div
          className={`w-full min-w-[300px] max-w-[905px] mx-auto p-4 h-48 bg-box/50 border resize-x border-white-low-opacity rounded-lg flex gap-1 overflow-hidden ${
            flexWrap && "flex-wrap"
          }`}
          ref={playground}
        >
          <motion.div
            layout
            className={`bg-white rounded-lg text-black flex items-center justify-center h-11 ${
              flexGrow && "grow"
            }`}
          />
          <motion.div
            layout
            className={`bg-white rounded-lg h-11 ${flexGrow && "grow"}`}
            style={{ flexBasis }}
          />
          <motion.div
            layout
            className={`bg-white rounded-lg h-11 ${flexGrow && "grow"}`}
            style={{ flexBasis }}
          />
          <motion.div
            layout
            className={`bg-white rounded-lg h-11 ${flexGrow && "grow"}`}
            style={{ flexBasis }}
          />
        </div>
        <div
          className={`flex items-center gap-3 mx-auto text-right mt-3`}
          style={{ width: playgroundWidth }}
        >
          <div className="h-1 rounded-full bg-white-low-opacity grow" />
          {playgroundWidth}px
        </div>
        {/* This is the place where you can see your changes live */}
      </LiveChanges>
      <BringChanges className="w-full max-w-[905px] mx-auto mt-8 space-y-6">
        <div>
          <h2 className="mb-4 text-xl text-white">Parent</h2>
          <Checkbox
            name="Flex Wrap"
            onChange={(e) => setFlexWrap(e.target.checked)}
          />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="mb-4 text-xl text-white">Children</h2>
          <Checkbox
            name="Flex Grow"
            onChange={(e) => setFlexGrow(e.target.checked)}
          />
          <Input
            name="Flex Basis"
            value={flexBasis}
            unit="px"
            onChange={(e) => onChangeHandler(e)}
          />
        </div>
      </BringChanges>
    </Workplace>
  );
}
