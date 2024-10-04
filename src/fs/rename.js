import fs from "fs/promises";
const rename = async () => {
  try {
    const [wrongFileName, renamedFile] = await Promise.all([
      fs
        .stat("./files/wrongFilename.txt")
        .then(() => true)
        .catch(() => false),

      fs
        .stat("./files/properFilename.md")
        .then(() => true)
        .catch(() => false),
    ]);
    if (!wrongFileName || renamedFile) {
      throw new Error("FS operation failed");
    }
    fs.rename("./files/wrongFilename.txt", "./files/properFilename.md");
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await rename();
