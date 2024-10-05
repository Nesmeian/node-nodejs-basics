import fs from "fs";
import path from "path";
import { createInterface } from "readline";
import url from "url";
const write = async () => {
  const currentDir = path.dirname(url.fileURLToPath(import.meta.url));
  const fileToWritePath = path.join(currentDir, "files", "fileToWrite.txt");
  const writeStream = fs.createWriteStream(fileToWritePath, "utf-8");
  process.stdout.write("Hi Friend write something there.\n");
  const input = createInterface(process.stdin);
  input.on("line", (message) => writeStream.write(message + "\n"));
};

await write();
