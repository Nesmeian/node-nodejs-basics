import fs from "fs/promises";
import url from "url";
import path from "path";
const rename = async () => {
  const currentDir=path.dirname(url.fileURLToPath(import.meta.url))
  const wrongFileNamePath=path.join(currentDir,'files','wrongFilename.txt')
  const renamedFilePath=path.join(currentDir,'files','properFilename.md')
  try {
    const [wrongFileName, renamedFile] = await Promise.all([
      fs
        .stat(wrongFileNamePath)
        .then(() => true)
        .catch(() => false),

      fs
        .stat(renamedFilePath)
        .then(() => true)
        .catch(() => false),
    ]);
    if (!wrongFileName || renamedFile) {
      throw new Error("FS operation failed");
    }
    fs.rename(wrongFileNamePath, renamedFilePath);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await rename();
