import fs from "fs";
const create = async () => {
  fs.exists("./files/fresh.txt", (exist) => {
    if (exist) {
      throw new Error("FS operation failed");
    } else {
      fs.writeFile("./files/fresh.txt", "I am fresh and young", (error) => {
        if (error) {
          throw error;
        }
      });
    }
  });
};

await create();
