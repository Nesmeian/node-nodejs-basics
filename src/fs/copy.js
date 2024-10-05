import fs from "fs/promises";
import url from "url";
import path from "path";
const copy = async () => {
  const currentPathDir = path.dirname(url.fileURLToPath(import.meta.url));
  const searchDirPath = path.join(currentPathDir, 'files');
  const copyDirPath = path.join(currentPathDir, 'files_copy');
  try {
    const [filesExist, copyNotExist] = await Promise.all([
      fs
        .stat(searchDirPath)
        .then(() => true)
        .catch(() => false),
      fs
        .stat(copyDirPath)
        .then(() => true)
        .catch(() => false),
    ]);

    if (!filesExist || copyNotExist) {
      throw new Error("FS operation failed");
    }
    await fs.cp(searchDirPath, copyDirPath, { recursive: true });
  } catch (err) {
    console.error(err.message);
  }
};

await copy();
