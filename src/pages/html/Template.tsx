import React from "react";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, {
  BringChanges,
  LiveChanges,
} from "@components/Tech/Workplace";
import Information from "@components/Tech/Information";
import CodeBlocks from "@components/Tech/CodeBlocks";

type Props = {};

export default function Template({}: Props) {
  const Codes = ``; // Write you codes here

  return (
    <>
      <MetaTag title="Template" image={null} description="" />
      <Container>
        <Information content="<h1>Input Testing</h1><p>The <code>input</code> HTML element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The <code>input</code> element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.</p>" />
        <CodeBlocks codeString={Codes} language="" fileName="index.html" />

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
    </>
  );
}
