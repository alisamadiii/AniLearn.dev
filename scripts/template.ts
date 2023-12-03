// @ts-nocheck

const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");
const { createSpinner } = require("nanospinner");
const figlet = require("figlet");
const gradient = require("gradient-string");

const TemplateMDX = (fileName, tech, contributor) => {
  return `---
  title: ""
  description: ""
  created_at: 2024/01/01
  level: ""
---

# ${fileName}
`;
};

async function createFiles(fileName, tech, contributor) {
  const filePathTSX = path.join(
    process.cwd(),
    `contents/techs/${tech}/${fileName}.mdx`
  );

  const Template_1 = createSpinner(
    `File ${fileName} created successfully! -- TSX`
  ).start();

  fs.writeFile(filePathTSX, TemplateMDX(fileName, tech, contributor), (err) => {
    if (err) {
      console.error(`Error creating file ${fileName}: ${err}`);
    } else {
      setTimeout(() => {
        Template_1.success();
      }, 500);
    }
  });

  setTimeout(() => {
    figlet("Have FUN", (err, data) =>
      console.log(gradient.pastel.multiline(data))
    );
  }, 600);
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
      choices: ["HTML", "CSS", "JavaScript"],
      default: "HTML",
    },
  ])
  .then((answers) => {
    createFiles(
      answers.FileName.toLowerCase(),
      answers.Tech.toLowerCase(),
      answers.name
    );
  });
