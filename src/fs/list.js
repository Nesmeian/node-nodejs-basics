import fs from "fs";
const list = async () => {
  try {
    const files = fs.readdirSync("./files");
    console.log(files);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
