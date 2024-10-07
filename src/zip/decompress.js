import zlib from "node:zlib";
import path from "path";
import url from "url";
import fs from "fs/promises";
import { createReadStream, createWriteStream } from "node:fs";

const decompress = async () => {
  const currentPathDir = path.dirname(url.fileURLToPath(import.meta.url));
  const decompressFileDestinationPath = path.join(
    currentPathDir,
    "files",
    "fileToCompress.txt"
  );
  const decompressFilePath = path.join(currentPathDir, "files", "archive.gz");
  const gunzip = zlib.createGunzip();
  const decompressFile = createReadStream(decompressFilePath);
  const decompressFileDestination = createWriteStream(
    decompressFileDestinationPath
  );

  try {
    await fs.access(decompressFilePath, fs.constants.F_OK);
  } catch (err) {
    throw new Error("Operation Failed");
  }
  decompressFile.pipe(gunzip).pipe(decompressFileDestination);
  decompressFileDestination.on("finish", async (err) => {
    console.log("Operation completed");
    await fs.unlink(decompressFilePath);
  });
};

await decompress();
