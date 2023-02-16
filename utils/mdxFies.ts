import fs from "fs";
import path from "path";

export const pathFiles = path.join(process.cwd(), "blog");

export const fileNames = fs.readdirSync(pathFiles, { withFileTypes: false });
