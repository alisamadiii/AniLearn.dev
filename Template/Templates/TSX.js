const { capitalizeWord } = require(".");

const TemplateImportFileTSX = (fileName) =>
  `export { default as ${capitalizeWord(fileName)} } from "./${fileName}";`;

const TemplateTSX = (fileName) => {
  return `import React from "react";
import Workplace, { LiveChanges, BringChanges } from "../";

type Props = {};

export default function ${capitalizeWord(fileName)}({}: Props) {
  return (
    // All your code must be inside the Workplace for writing a clean codes
    // You can utility classes. (optional)

    <Workplace className="">
      <LiveChanges className="">
        {/* This is the place where you can see your changes live */}
        <p>This is the place where you can see your changes live</p>
      </LiveChanges>
      <BringChanges className="">
        {/* This is the place where you can add your setting to change your items, e.g: buttons, ranges and more */}
        <p>
          This is the place where you can add your setting to change your items,
          e.g: buttons, ranges and more
        </p>
      </BringChanges>
    </Workplace>
  );
}
`;
};

module.exports = { TemplateImportFileTSX, TemplateTSX };
