import zlib from "node:zlib";
import path from "path";
import url from "url";
import { pipeline } from "node:stream";
import fs from "fs/promises";
import { createReadStream, createWriteStream } from "node:fs";

const decompress = async () => {
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
  const gunzip = zlib.createGunzip();
  const compressFileDestination = createReadStream(compressFileDestinationPath);
  const compressFile = createWriteStream(compressFilePath);
  const checkCompressFile = await fs
    .stat(compressFilePath)
    .then(() => true)
    .catch(() => false);
  try {
    pipeline(compressFileDestination, gunzip, compressFile, (err) => {
      if (err) {
        console.log(err);
        throw new Error("FS operation failed");
      } else {
        console.log("Decompressing is completed");
      }
    });
  } catch (err) {
    console.log(err);
  }
};

await decompress();
