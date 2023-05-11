import Container from "@layouts/Container";
import React, { useState } from "react";
import { motion } from "framer-motion";

type Props = {};

import {
  Heading_1,
  Heading_2,
  Paragraph,
} from "@components/Tech/Typography_Tech";
import Button_Tech from "@components/Button_Tech";

export default function Display_Property({}: Props) {
  const [display, setDisplay] = useState("block");

  return (
    <Container className="pt-12 pb-20">
      <small className="text-transparent uppercase bg-gradient-text bg-clip-text">
        display
      </small>

      <Heading_1>Display Property</Heading_1>
      <Paragraph>
        The display property specifies the display behavior (the type of
        rendering box) of an element.
      </Paragraph>

      <Heading_2 margin={true}>Working Place</Heading_2>
      <Paragraph>This is the place where you can try them.</Paragraph>

      {/* Code */}
      <div className="relative w-full p-4 mt-12 border rounded-lg rounded-tl-none bg-box border-white-low-opacity">
        <small className="absolute top-0 left-0 px-4 py-1 text-white -translate-y-full bg-gradient-to-l from-primary to-secondary rounded-t-md">
          Code
        </small>
        <code>display: {display == "hidden" ? "none" : display};</code>
      </div>

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

      {/* Buttons for changing the values */}
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
    </Container>
  );
}
