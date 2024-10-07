import fs from "fs/promises";
import url from "url";
import path from "path";
import { error } from "console";
const list = async () => {
  const currentDir = path.dirname(url.fileURLToPath(import.meta.url));
  const fileListPath = path.join(currentDir, "files");
  const fileList = await fs
    .stat(fileListPath)
    .then(() => true)
    .catch(() => false);
  if (fileList) {
    console.log(await fs.readdir(fileListPath));
  } else {
    throw new Error("FS operation failed");
  }
};

await list();
