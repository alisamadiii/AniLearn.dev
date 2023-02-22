import fs from "fs";
import path from "path";

// HTML
export const htmlPathFiles = path.join(process.cwd(), "blog/html");
export const htmlFileNames = fs.readdirSync(htmlPathFiles, {
  withFileTypes: false,
});

// CSS
export const cssPathFiles = path.join(process.cwd(), "blog/css");
export const cssFileNames = fs.readdirSync(cssPathFiles, {
  withFileTypes: false,
});

// // JS
// export const jsPathFiles = path.join(process.cwd(), "blog/js");
// export const jsFileNames = fs.readdirSync(jsPathFiles, {
//   withFileTypes: false,
// });

// // open-source
// export const openSourcePathFiles = path.join(process.cwd(), "blog/openSource");
// export const openSourceFileNames = fs.readdirSync(openSourcePathFiles, {
//   withFileTypes: false,
// });
