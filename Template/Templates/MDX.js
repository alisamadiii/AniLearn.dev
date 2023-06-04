const { capitalizeWord } = require(".");

const TemplateMDX = (fileName, tech, name) => {
  return `---
title: ${fileName}
tech: ${tech}
order: 
---

<Small_Gradient>${fileName}</Small_Gradient>

# ${fileName}

{/* Hey ${name.toUpperCase()}! You will get an error, You need to add this Components to MDXComponent so that MDX can read it. */}
{/* Simply go to "./src/components/Tech/MDXComponent.ts" */}
{/* Import your file and choose tech (HTML, CSS) correctly */}
{/* Once You imported, Add it to the list of Components */}
{/* Now You can brings and change the world 😀 */}

## Working Place

This is the place where you can try them.

<${capitalizeWord(fileName)} />
`;
};

module.exports = { TemplateMDX };
