import fs from "fs";
import path from "path";
import url from "url";
const read = async () => {
  const dirPath = path.dirname(url.fileURLToPath(import.meta.url));
  const filePath = path.join(dirPath, "files", "fileToRead.txt");
  const read = fs.createReadStream(filePath, "utf-8");
  read.on("data", (chunk) => {
    process.stdout.write(chunk + "\n");
  });
};

await read();
