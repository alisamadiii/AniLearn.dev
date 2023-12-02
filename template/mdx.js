// "It is an open-source project, this page is going to be written by ${contributor}";

const TemplateMDX = (fileName, tech, contributor) => {
  return `---
  title: ""
  description: ""
  created_at: ""
  level: ""
---

# ${fileName}
`;
};

module.exports = { TemplateMDX };
