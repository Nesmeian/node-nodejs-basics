import fs from "fs";
const remove = async () => {
  fs.stat("./create.js", (err, stat) => {
    console.log(1);
    if (err) {
      throw new Error("FS operation failed");
    }
  });
};

await remove();
