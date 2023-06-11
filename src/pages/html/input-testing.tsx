import Workplace, { BringChanges, LiveChanges } from "@Workplace/index";
import CodeBlocks from "@components/Tech/CodeBlocks";
import Information from "@components/Tech/Information";
import Container from "@layouts/Container";
import React from "react";

type Props = {};

export default function InputTesting({}: Props) {
  const Codes = `<input type="button">
<input type="checkbox">
<input type="color">
<input type="date">
<input type="datetime-local">
<input type="email">
<input type="file">
<input type="hidden">
<input type="image">
<input type="month">
<input type="number">
<input type="password">
<input type="radio">
<input type="range">
<input type="reset">
<input type="search">
<input type="submit">
<input type="tel">
<input type="text">
<input type="time">
<input type="url">
<input type="week">`;

  return (
    <Container>
      <Information content="<h1>Input Testing</h1><p>The <code>input</code> HTML element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The <code>input</code> element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.</p>" />
      <CodeBlocks
        codeString={Codes}
        language="htmlbars"
        fileName="index.html"
      />
      <Workplace className="">
        <LiveChanges className="">
          {/* This is the place where you can see your changes live */}
          <p>This is the place where you can see your changes live</p>
        </LiveChanges>
        <BringChanges className="">
          {/* This is the place where you can add your setting to change your items, e.g: buttons, ranges and more */}
          <p>
            This is the place where you can add your setting to change your
            items, e.g: buttons, ranges and more
          </p>
        </BringChanges>
      </Workplace>
    </Container>
  );
}
