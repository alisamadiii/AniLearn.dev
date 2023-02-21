import fs from "fs";
import path from "path";

export const cssPathFiles = path.join(process.cwd(), "blog/css");
export const cssFileNames = fs.readdirSync(cssPathFiles, {
  withFileTypes: false,
});
