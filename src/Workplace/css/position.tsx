import React, { useState } from "react";
import { motion } from "framer-motion";

import Workplace, { BringChanges, LiveChanges } from "..";
import { Range } from "@components/Tech/Range";
import Button_Tech from "@components/Button_Tech";

const INITIAL_VALUE: {
  top: number;
  right: number;
  bottom: number;
  left: number;
} = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

type Props = {};

export default function Position({}: Props) {
  const [position, setPosition] = useState("static");
  const [positionValue, setPositionValue] = useState(INITIAL_VALUE);
  const [validPosition, setValidPosition] = useState<"top" | "bottom">("top");

  const onChangeHandler = (e: any) => {
    const { value, name } = e.target;
    setPositionValue({ ...positionValue, [name]: Number(value) });
  };

  return (
    <Workplace>
      <LiveChanges>
        <div className="relative w-full overflow-y-auto border rounded-lg bg-box h-96 border-white-low-opacity">
          <nav
            className={`${position} flex items-center w-full h-12 px-4 text-black z-20 ${
              position == "absolute" ? "bg-white/90" : "bg-white"
            }`}
            style={
              validPosition == "top"
                ? {
                    top: positionValue.top,
                    left: positionValue.left,
                  }
                : {
                    right: positionValue.right,
                    bottom: positionValue.bottom,
                  }
            }
          >
            <h1>Navbar</h1>
          </nav>
          <motion.section layout="position" className="p-4">
            {[...Array(5)].map(() => (
              <>
                <h2 className="mb-3 text-3xl text-white">Lorem Ipsum</h2>
                <p className="mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis pariatur aliquam amet, illum quasi, explicabo
                  impedit sed ut dolore doloremque eum et debitis repellendus
                  inventore accusamus deserunt corrupti autem officiis? Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
                  pariatur aliquam amet, illum quasi, explicabo impedit sed ut
                  dolore doloremque eum et debitis repellendus inventore
                  accusamus deserunt corrupti autem officiis? Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Reiciendis pariatur
                  aliquam amet, illum quasi, explicabo impedit sed ut dolore
                  doloremque eum et debitis repellendus inventore accusamus
                  deserunt corrupti autem officiis? Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Reiciendis pariatur aliquam
                  amet, illum quasi, explicabo impedit sed ut dolore doloremque
                  eum et debitis repellendus inventore accusamus deserunt
                  corrupti autem officiis?
                </p>
              </>
            ))}
          </motion.section>
        </div>
      </LiveChanges>

      <BringChanges>
        <div className="flex flex-wrap gap-4 mt-12">
          <Button_Tech
            value="static"
            setClassName={setPosition}
            classNameValue="static"
            className={position}
          />
          <Button_Tech
            value="relative"
            setClassName={setPosition}
            classNameValue="relative"
            className={position}
          />
          <Button_Tech
            value="absolute"
            setClassName={setPosition}
            classNameValue="absolute"
            className={position}
          />
          <Button_Tech
            value="fixed"
            setClassName={setPosition}
            classNameValue="fixed"
            className={position}
          />
          <Button_Tech
            value="sticky"
            setClassName={setPosition}
            classNameValue="sticky"
            className={position}
          />
        </div>
        <div className="my-12 space-x-4">
          <label htmlFor="validPosition_1">
            <input
              type="radio"
              name="validPosition"
              id="validPosition_1"
              onClick={(e) => e.isTrusted && setValidPosition("top")}
            />
            Top
          </label>
          <label htmlFor="validPosition_2">
            <input
              type="radio"
              name="validPosition"
              id="validPosition_2"
              onClick={(e) => e.isTrusted && setValidPosition("bottom")}
            />
            Bottom
          </label>
        </div>
        {/* Range for changing the position of the navbar  */}
        <div className="grid gap-8 md:grid-cols-2">
          <Range
            filterName="top"
            maxNum={300}
            value={positionValue.top}
            onChange={onChangeHandler}
          />
          <Range
            filterName="left"
            maxNum={300}
            value={positionValue.left}
            onChange={onChangeHandler}
          />
          <Range
            filterName="bottom"
            maxNum={300}
            value={positionValue.bottom}
            onChange={onChangeHandler}
          />
          <Range
            filterName="right"
            maxNum={300}
            value={positionValue.right}
            onChange={onChangeHandler}
          />
        </div>
      </BringChanges>
    </Workplace>
  );
}
