import path from "path";
import { createHash } from "node:crypto";
import url from "url";
import fs from "fs";
const calculateHash = async () => {
  const currentPathDir = path.dirname(url.fileURLToPath(import.meta.url));
  const fileToCalculatePath = path.join(
    currentPathDir,
    "files",
    "fileToCalculateHashFor.txt"
  );
  const readStream = fs.createReadStream(fileToCalculatePath, "utf8");
  const hashFunc = createHash("sha256");
  readStream.on("data", (chunk) => {
    hashFunc.update(chunk);
  });
  readStream.on("end", () => {
    const fileHash = hashFunc.digest("hex");
    console.log(fileHash);
  });
};

await calculateHash();
