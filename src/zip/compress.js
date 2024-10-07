import zlib from "node:zlib";
import path from "path";
import url from "url";
import fs from "fs/promises";
import { createReadStream, createWriteStream } from "node:fs";

const compress = async () => {
  const currentPathDir = path.dirname(url.fileURLToPath(import.meta.url));
  const compressFilePath = path.join(
    currentPathDir,
    "files",
    "fileToCompress.txt"
  );
  const compressFileDestinationPath = path.join(
    currentPathDir,
    "files",
    "archive.gz"
  );
  const gzip = zlib.createGzip();

  try {
    await fs.access(compressFilePath, fs.constants.F_OK);
  } catch (err) {
    throw new Error("Operation failed");
  }

  const compressFileStream = createReadStream(compressFilePath);
  const compressFileDestinatinoStream = createWriteStream(
    compressFileDestinationPath
  );

  compressFileStream.pipe(gzip).pipe(compressFileDestinatinoStream);
  compressFileDestinatinoStream.on("finish", async (err) => {
    console.log("Operation completed");
    await fs.unlink(compressFilePath);
  });
};

await compress();
