import path from "path";
import url from "url";
import { release, version } from "os";
import { createServer } from "http";
import fs from "fs/promises";
const currentPathDir = path.dirname(url.fileURLToPath(import.meta.url));
const aJsonPath = path.join(currentPathDir, "files", "a.json");
const bJsonPath = path.join(currentPathDir, "files", "b.json");
import "./files/c.js";

const random = Math.random();

let unknownObject;
async function readModule(path) {
  const data = await fs.readFile(path, "utf8");
  return data;
}
if (random > 0.5) {
  unknownObject = await readModule(aJsonPath);
} else {
  unknownObject = await readModule(bJsonPath);
}
console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${import.meta.url}`);
console.log(`Path to current directory is ${currentPathDir}`);

const myServer = createServer((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);
myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
