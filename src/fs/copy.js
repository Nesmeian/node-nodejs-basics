import fs from "fs";
const copy = async () => {
  fs.stat("./files/", (err, exist) => {
    if (exist) {
      fs.cp("files", "copy", { recursive });
    } else {
      console.log("erorr");
    }
  });
};

await copy();
