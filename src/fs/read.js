import fs from "fs/promises";
import url from "url";
import path from "path";
const read = async () => {
  const currentDir = path.dirname(url.fileURLToPath(import.meta.url));
  const fileToReadPath = path.join(currentDir, "files", "fileToRead.txt");
  const fileToRead = await fs
    .stat(fileToReadPath)
    .then(() => true)
    .catch(() => false);
  if (fileToRead) {
    const data = await fs.readFile(fileToReadPath, "utf8");
    console.log(Buffer.from(data).toString())
  } else {
    throw new Error("FS operation failed");
  }
};

await read();
