import React from "react";
import { motion } from "framer-motion";

type Props = {
  tabs: string[];
  stateValue: number;
  setStateValue: (a: number) => void;
};

export default function Tabs({ tabs, stateValue, setStateValue }: Props) {
  return (
    <ul className="flex py-2 mb-4 border-b-2 border-white-low-opacity">
      {tabs.map((tab, index) => (
        <li
          key={index}
          className={`relative px-2 py-1 cursor-pointer hover:opacity-90 ${index + 1 == stateValue && "text-white"}`}
          onClick={() => setStateValue(index + 1)}
        >
          {index + 1 == stateValue && (
            <motion.div
              layoutId="button"
              className="absolute inset-0 w-full bg-primary -z-10"
              style={{ borderRadius: "5px" }}
              transition={{ duration: 0.2 }}
            />
          )}
          {tab}
        </li>
      ))}
    </ul>
  );
}
