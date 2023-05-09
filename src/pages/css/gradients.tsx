import Container from "@layouts/Container";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

import {
  Heading_1,
  Heading_2,
  Paragraph,
} from "@components/Tech/Typography_Tech";
import { Gradients } from "@contents/Gradients";

// Icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Gradients_Page({}: Props) {
  const [selectedGradient, setSelectedGradient] = useState<number>(0);

  const changingGradient = (job: "increase" | "decrease") => {
    if (job == "increase") {
      setSelectedGradient(selectedGradient + 1);
    } else {
      if (selectedGradient == 0) return;

      setSelectedGradient(selectedGradient - 1);
    }
  };

  return (
    <Container className="py-12">
      <small className="text-transparent uppercase bg-gradient-text bg-clip-text">
        gradients
      </small>

      <Heading_1>
        Gradients{" "}
        <span className="text-sm opacity-80">
          {selectedGradient + 1} / {Gradients.length}
        </span>
      </Heading_1>
      <Paragraph>
        The linear-gradient() CSS function creates an image consisting of a
        progressive transition between two or more colors along a straight line.
        Its result is an object of the{" "}
        <span className="text-white">&lt;gradient&gt;</span> data type, which is
        a special kind of <span className="text-white">&lt;image&gt;</span>.
      </Paragraph>

      {/* Code */}
      <div className="relative w-full p-4 mt-16 border rounded-lg rounded-tl-none bg-box border-white-low-opacity">
        <small className="absolute top-0 left-0 px-4 py-1 text-white -translate-y-full bg-gradient-to-l from-primary to-secondary rounded-t-md">
          Code
        </small>
        <code>
          background: &quot;linear-gradient({45}deg,{" "}
          {Gradients[selectedGradient].colors.join(", ")})&quot;;{" "}
          <span className="opacity-70">
            &#47;&#47; {Gradients[selectedGradient].name}
          </span>
        </code>
      </div>

      <Heading_2 margin={true}>Working Place</Heading_2>
      <Paragraph>This is the place where you can try them.</Paragraph>

      <motion.section layout className="relative my-12">
        <motion.div
          key={Math.floor(Math.random() * 1000)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute w-full h-52 rounded-xl -z-10 blur-2xl"
          style={{
            background: `linear-gradient(${45}deg, ${Gradients[
              selectedGradient
            ].colors.map((color) => `${color}80`)})`,
          }}
        />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={Math.floor(Math.random() * 1000)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full py-4 font-medium text-center text-white h-52 rounded-xl"
            style={{
              background: `linear-gradient(${45}deg, ${Gradients[
                selectedGradient
              ].colors.join(", ")})`,
            }}
          >
            {Gradients[selectedGradient].name}
          </motion.div>
        </AnimatePresence>
        {/* Increasing and Decreasing */}
        <div className="flex gap-4 mt-4">
          <button
            className="px-4 py-2 text-white duration-200 border-2 rounded-md border-button bg-button focus:border-primary"
            onClick={() => changingGradient("decrease")}
          >
            <IoIosArrowBack />
          </button>
          <button
            className="px-4 py-2 text-white duration-200 border-2 rounded-md border-button bg-button focus:border-primary"
            onClick={() => changingGradient("increase")}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </motion.section>

      <Heading_2 margin={true}>Text Gradient</Heading_2>
      <Paragraph>This is the place where you can try them.</Paragraph>

      {/* Code */}
      <div className="relative w-full p-4 mt-16 border rounded-lg rounded-tl-none bg-box border-white-low-opacity">
        <small className="absolute top-0 left-0 px-4 py-1 text-white -translate-y-full bg-gradient-to-l from-primary to-secondary rounded-t-md">
          Code
        </small>
        <code className="space-y-2">
          <div>
            background: &quot;linear-gradient({45}deg,{" "}
            {Gradients[selectedGradient].colors.join(", ")})&quot;;{" "}
            <span className="opacity-70">
              &#47;&#47; {Gradients[selectedGradient].name}
            </span>
          </div>
          <div>-webkit-background-clip: text;</div>
          <div>-webkit-text-fill-color: transparent;</div>
        </code>
      </div>

      <div className="relative flex items-center justify-center w-full p-4 mt-12 overflow-hidden border rounded-lg h-52 bg-box border-white-low-opacity">
        <h1
          className="text-4xl md:text-5xl font-black text-transparent !bg-clip-text"
          style={{
            background: `linear-gradient(${45}deg, ${Gradients[
              selectedGradient
            ].colors.join(", ")})`,
          }}
        >
          Text-Gradient
        </h1>
      </div>
    </Container>
  );
}
