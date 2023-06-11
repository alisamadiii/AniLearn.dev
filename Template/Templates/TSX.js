const { capitalizeWord } = require(".");

const TemplateImportFileTSX = (fileName) =>
  `export { default as ${capitalizeWord(fileName)} } from "./${fileName}";`;

const TemplateTSX = (fileName, contributor) => {
  return `/* It is an open-source project, this page is going to be written by ${contributor} */
  
import React from "react";

import Container from "@layouts/Container";
import MetaTag from "@layouts/MetaTag";
import Workplace, {
  BringChanges,
  LiveChanges,
} from "@components/Tech/Workplace";
import Information from "@components/Tech/Information";
import CodeBlocks from "@components/Tech/CodeBlocks";

// you can use these components 
import Input from "@tech/Input";
import Checkbox from "@components/Checkbox";
import GivingComment from "@components/Comment";
import SaveButton from "@components/SaveButton";
import Range from "@tech/Range";

type Props = {};

export default function ${capitalizeWord(fileName)}({}: Props) {
  const Codes = ""; // Use backtick for writing your code

  return (
    <>
      <MetaTag title="${fileName}" image={null} description="" />
      <Container>
        <Information content="<h1>${fileName}</h1><p>tell us information about ${fileName}</p>" />
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
`;
};

module.exports = { TemplateImportFileTSX, TemplateTSX };
