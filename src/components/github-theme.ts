const githubLight = {
  'code[class*="language-"]': {
    color: "#24292e",
    background: "#ffffff",
    fontFamily: "var(--font-geist-mono)",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    fontSize: "14px",
  },
  'pre[class*="language-"]': {
    color: "#24292e",
    background: "#ffffff",
    fontFamily: "var(--font-geist-mono)",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.3",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: ".5em 0",
    overflow: "auto",
    borderRadius: "0.3em",
    border: "1px solid hsl(0 0% 93%)",
  },
  ':not(pre) > code[class*="language-"]': {
    background: "#f6f8fa",
    color: "#24292e",
    padding: ".2em .4em",
    borderRadius: ".3em",
  },
  comment: {
    color: "#6a737d",
  },
  prolog: {
    color: "#6a737d",
  },
  doctype: {
    color: "#6a737d",
  },
  cdata: {
    color: "#6a737d",
  },
  punctuation: {
    color: "#393a34",
  },
  ".namespace": {
    Opacity: ".7",
  },
  property: {
    color: "#005cc5",
  },
  keyword: {
    color: "#d73a49",
  },
  tag: {
    color: "#22863a",
  },
  "class-name": {
    color: "#6f42c1",
    fontWeight: "bold",
  },
  boolean: {
    color: "#005cc5",
  },
  constant: {
    color: "#005cc5",
  },
  symbol: {
    color: "#e36209",
  },
  deleted: {
    color: "#d73a49",
    backgroundColor: "#ffeef0",
  },
  number: {
    color: "#005cc5",
  },
  selector: {
    color: "#22863a",
  },
  "attr-name": {
    color: "#d73a49",
  },
  string: {
    color: "#032f62",
  },
  char: {
    color: "#032f62",
  },
  builtin: {
    color: "#6f42c1",
  },
  inserted: {
    color: "#22863a",
    backgroundColor: "#f0fff4",
  },
  variable: {
    color: "#e36209",
  },
  operator: {
    color: "#d73a49",
  },
  entity: {
    color: "#22863a",
    cursor: "help",
  },
  url: {
    color: "#032f62",
  },
  ".language-css .token.string": {
    color: "#032f62",
  },
  ".style .token.string": {
    color: "#032f62",
  },
  atrule: {
    color: "#d73a49",
  },
  "attr-value": {
    color: "#005cc5",
  },
  function: {
    color: "#6f42c1",
  },
  regex: {
    color: "#032f62",
  },
  important: {
    color: "#005cc5",
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
};

const githubDark = {
  'code[class*="language-"]': {
    color: "#adbac7",
    fontFamily: "var(--font-geist-mono)",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    fontSize: "14px",
  },
  'pre[class*="language-"]': {
    color: "#adbac7",
    fontFamily: "var(--font-geist-mono)",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.3",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: ".5em 0",
    overflow: "auto",
    borderRadius: "0.3em",
    border: "1px solid hsl(0 2% 24%)",
  },
  ':not(pre) > code[class*="language-"]': {
    color: "#adbac7",
    padding: ".2em .4em",
    borderRadius: ".3em",
  },
  comment: {
    color: "#768390",
  },
  prolog: {
    color: "#768390",
  },
  doctype: {
    color: "#768390",
  },
  cdata: {
    color: "#768390",
  },
  punctuation: {
    color: "#adbac7",
  },
  ".namespace": {
    Opacity: ".7",
  },
  property: {
    color: "#6cb6ff",
  },
  keyword: {
    color: "#f47067",
  },
  tag: {
    color: "#8ddb8c",
  },
  "class-name": {
    color: "#dcbdfb",
    fontWeight: "bold",
  },
  boolean: {
    color: "#b392f0",
  },
  constant: {
    color: "#b392f0",
  },
  symbol: {
    color: "#f47067",
  },
  deleted: {
    color: "#f47067",
    backgroundColor: "#5d3a3a",
  },
  number: {
    color: "#b392f0",
  },
  selector: {
    color: "#8ddb8c",
  },
  "attr-name": {
    color: "#f47067",
  },
  string: {
    color: "#96d0ff",
  },
  char: {
    color: "#96d0ff",
  },
  builtin: {
    color: "#6cb6ff",
  },
  inserted: {
    color: "#57ab5a",
    backgroundColor: "#2b6a30",
  },
  variable: {
    color: "#e36209",
  },
  operator: {
    color: "#adbac7",
  },
  entity: {
    color: "#8ddb8c",
    cursor: "help",
  },
  url: {
    color: "#96d0ff",
  },
  ".language-css .token.string": {
    color: "#96d0ff",
  },
  ".style .token.string": {
    color: "#96d0ff",
  },
  atrule: {
    color: "#f47067",
  },
  "attr-value": {
    color: "#6cb6ff",
  },
  function: {
    color: "#dcbdfb",
  },
  regex: {
    color: "#96d0ff",
  },
  important: {
    color: "#f47067",
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
};

export { githubLight, githubDark };
