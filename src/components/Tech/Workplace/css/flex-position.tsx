import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button_Tech from "@components/Button_Tech";

type Props = {};

export default function FlexPosition({}: Props) {
  const [rectsNum, setRectsNum] = useState(3);
  const [highlightLine, setHighlightLine] = useState<number>(1);
  // First State Management
  const [justifyContent, setJustifyContent] = useState("justify-start");
  const [alignItems, setAlignItems] = useState("items-start");

  return (
    <div>
      <div className="flex flex-col items-center mt-8">
        <div className="absolute h-24 w-52 bg-primary/20 blur-3xl -z-10" />
        {/* Demo */}
        <div
          className={`w-full max-w-[905px] mx-auto h-36 bg-box/50 border border-white-low-opacity rounded-lg flex gap-1 overflow-hidden ${justifyContent} ${alignItems}`}
        >
          <AnimatePresence initial={false}>
            {[...Array(rectsNum)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                layout
                className="bg-white rounded-lg w-11 h-11"
              />
            ))}
          </AnimatePresence>
        </div>
        <div className="flex flex-wrap gap-3 mt-8">
          <Button_Tech
            value="start"
            classNameValue="justify-start"
            className={justifyContent}
            setClassName={setJustifyContent}
            highlightValue={1}
            setHighlightLine={setHighlightLine}
          />
          <Button_Tech
            value="end"
            classNameValue="justify-end"
            className={justifyContent}
            setClassName={setJustifyContent}
            highlightValue={2}
            setHighlightLine={setHighlightLine}
          />
          <Button_Tech
            value="center"
            classNameValue="justify-center"
            className={justifyContent}
            setClassName={setJustifyContent}
            highlightValue={3}
            setHighlightLine={setHighlightLine}
          />
          <Button_Tech
            value="space-between"
            classNameValue="justify-between"
            className={justifyContent}
            setClassName={setJustifyContent}
            highlightValue={4}
            setHighlightLine={setHighlightLine}
          />
          <Button_Tech
            value="space-evenly"
            classNameValue="justify-evenly"
            className={justifyContent}
            setClassName={setJustifyContent}
            highlightValue={5}
            setHighlightLine={setHighlightLine}
          />
          <Button_Tech
            value="space-around"
            classNameValue="justify-around"
            className={justifyContent}
            setClassName={setJustifyContent}
            highlightValue={6}
            setHighlightLine={setHighlightLine}
          />
        </div>
      </div>
    </div>
  );
}
