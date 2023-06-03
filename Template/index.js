const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const { createSpinner } = require("nanospinner");
const figlet = require("figlet");
const gradient = require("gradient-string");

const { TemplateTSX, TemplateImportFileTSX } = require("./Templates/TSX");
const { TemplateMDX } = require("./Templates/MDX");

function createFiles(fileName, tech, name) {
  const folderPathForTSX = `../anilearn/src/Workplace/${tech}`;
  const importingFileTSX = `../anilearn/src/Workplace/${tech}/index.ts`;
  const folderPathForMDX = `../anilearn/src/docs/${tech}`;

  const filePathTSX = path.join(folderPathForTSX, `${fileName}.tsx`);
  const filePathMDX = path.join(folderPathForMDX, `${fileName}.mdx`);

  const Template_1 = createSpinner(
    `File ${fileName} created successfully! -- TSX`
  ).start();

  fs.writeFile(filePathTSX, TemplateTSX(fileName), (err) => {
    if (err) {
      console.error(`Error creating file ${fileName}: ${err}`);
    } else {
      setTimeout(() => {
        Template_1.success();
      }, 1000);
    }
  });

  const Template_2 = createSpinner(
    `File ${fileName} created successfully! -- MDX`
  ).start();

  fs.writeFile(filePathMDX, TemplateMDX(fileName, tech, name), (err) => {
    if (err) {
      console.error(`Error creating file ${fileName}: ${err}`);
    } else {
      setTimeout(() => {
        Template_2.success();
      }, 2000);
    }
  });

  const Template_3 = createSpinner(`Imported File successfully -- TSX`).start();

  fs.appendFile(importingFileTSX, TemplateImportFileTSX(fileName), (err) => {
    if (err) {
      console.error(`Error creating file ${fileName}: ${err}`);
    } else {
      setTimeout(() => {
        Template_3.success();
      }, 3000);
    }
  });

  setTimeout(() => {
    figlet("Have FUN", (err, data) =>
      console.log(gradient.pastel.multiline(data))
    );
  }, 3000);
}

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Your Name: ",
      default: "Ali Reza",
    },
    {
      type: "input",
      name: "FileName",
      message: "FileName: ",
      default: "position",
    },
    {
      type: "list",
      name: "Tech",
      message: "Tech Stack: ",
      choices: ["HTML", "CSS"],
      default: "CSS",
    },
  ])
  .then((answers) => {
    createFiles(
      answers.FileName.toLowerCase(),
      answers.Tech.toLowerCase(),
      answers.name
    );
  });
