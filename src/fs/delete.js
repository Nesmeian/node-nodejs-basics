import fs from "fs";
const remove = async () => {
  fs.stat("./files/fileToRemove.txt", (err) => {
    fs.rm("./files/fileToRemove.txt", (err) => {
      if (err) {
        console.log(err);
      }
    });
    if (err) {
      throw new Error("FS operation failed");
    }
  });
};

await remove();
