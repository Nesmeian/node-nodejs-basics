import fs from "fs/promises";
import url from "url";
import path from "path";
const create = async () => {
  const currentDir = path.dirname(url.fileURLToPath(import.meta.url));
  const searchFilePath = path.join(currentDir, "files", "fresh.txt");
  const searchFile = await fs
    .stat(searchFilePath)
    .then(() => true)
    .catch(() => false);
  if (!searchFile) {
    fs.writeFile(searchFilePath, "I am fresh and young", (error) => {
      if (error) {
        console.log(error);
      }
    });
  } else {
    throw new Error("FS operation failed");
  }
};

await create();
