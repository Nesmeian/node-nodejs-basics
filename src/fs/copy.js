import fs from "fs/promises";

const copy = async () => {
  try {
    const [filesExist, copyNotExist] = await Promise.all([
      fs
        .stat("files")
        .then(() => true)
        .catch(() => false),
      fs
        .stat("files_copy")
        .then(() => true)
        .catch(() => false),
    ]);

    if (!filesExist || copyNotExist) {
      throw new Error("FS operation failed");
    }
    await fs.cp("files", "files_copy", { recursive: true });
  } catch (err) {
    console.error(err.message);
  }
};

await copy();
