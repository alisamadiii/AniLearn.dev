import React, { useState } from "react";
import { motion } from "framer-motion";

import Workplace from "..";
import Button_Tech from "@components/Button_Tech";

type Props = {};

export default function DisplayProperty({}: Props) {
  const [display, setDisplay] = useState("block");

  return (
    <Workplace>
      <div className="relative w-full p-4 mt-12 overflow-hidden border rounded-lg bg-box border-white-low-opacity">
        <h1 className={`text-3xl text-white bg-primary ${display}`}>
          Lorem Ipsum
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          laboriosam fuga veniam eum doloremque! Pariatur aliquam sunt, quae
          nobis asperiores eligendi! Error sunt laborum dignissimos nostrum odit
          ipsum rem ut!
        </p>
      </div>

      <motion.div layout className="flex flex-wrap gap-2 mt-12">
        <Button_Tech
          value="Block"
          className={display}
          classNameValue="block"
          setClassName={setDisplay}
        />
        <Button_Tech
          value="Inline"
          className={display}
          classNameValue="inline"
          setClassName={setDisplay}
        />
        <Button_Tech
          value="Inline-Block"
          className={display}
          classNameValue="inline-block"
          setClassName={setDisplay}
        />
        <Button_Tech
          value="None"
          className={display}
          classNameValue="hidden"
          setClassName={setDisplay}
        />
      </motion.div>
    </Workplace>
  );
}
