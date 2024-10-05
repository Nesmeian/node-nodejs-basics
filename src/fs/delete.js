import fs from "fs/promises";
import path from "path";
import url from "url";
const remove = async () => {
  const currentDir = path.dirname(url.fileURLToPath(import.meta.url));
  const fileToRemovePath = path.join(currentDir, "files", "fileToRemove.txt");
  const fileToRemove = await fs
    .stat(fileToRemovePath)
    .then(() => true)
    .catch(() => false);
  if (fileToRemove) {
    await fs.rm(fileToRemovePath);
  } else {
    throw new Error("FS operation failed");
  }
};

await remove();
