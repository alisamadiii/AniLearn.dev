/* It is an open-source project, this page is going to be written by Ali Reza */
  
import React from "react";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, {
  BringChanges,
  LiveChanges,
} from "@components/Tech/Workplace";

// you can use these components
import {
  Checkbox,
  Information,
  CodeBlocks,
  Button_Tech,
  GivingComment,
  Input,
  Range,
  Tabs,
  Dropdown
} from "@components/Tech";

type Props = {};

export default function RoundedCorners({}: Props) {
  const Codes = ""; // Use backtick for writing your code

  return (
    <>
      <MetaTag title="rounded-corners" image={null} description="" />
      <Container>
        <Information content="<h1>rounded-corners</h1><p>tell us information about rounded-corners</p>" />
        <CodeBlocks codeString={Codes} language="css" fileName="style.css" />

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
