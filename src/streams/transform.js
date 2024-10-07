import { Transform } from "stream";

const transform = async () => {
  const reverseText = new Transform({
    transform(chunk, _, cb) {
      this.push(chunk.toString().split("").reverse().join("") + "\n");
      cb();
      process.stdout.write("If you want to finish operation push CTRL + C\n");
    },
  });
  process.stdout.write("Hello friend, write something here.\n");

  process.stdin.pipe(reverseText).pipe(process.stdout);
};

await transform();
