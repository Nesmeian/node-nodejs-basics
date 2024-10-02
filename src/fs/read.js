import fs from "fs";
const read = async () => {
  fs.readFile("./files/fileToRead.txt", "utf8", (err, data) => {
    if (err) {
      throw new Error("FS operation failed");
    }
    console.log(data);
  });
};

await read();
