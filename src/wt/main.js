import { Worker } from "worker_threads";
import url from "url";
import os from "os";
import path from "path";
const performCalculations = async () => {
  const counter = 10;
  const currentPathDir = path.dirname(url.fileURLToPath(import.meta.url));
  const searchFilePath = path.join(currentPathDir, "worker.js");
  const cpu = os.cpus().length;

  const workers = Array.from({ length: cpu }, (_, i) => {
    const worker = new Worker(searchFilePath);
    worker.postMessage(counter + i);
    return new Promise((resolve, reject) => {
      worker.on("message", (value) =>
        resolve({ status: "resolved", data: value })
      );
      worker.on("error", () => resolve({ status: "error", data: null }));
    });
  });
  const result = await Promise.allSettled(workers);
  console.log(result);
  console.log("\nStatus:\n");
  result.map((e) => console.log(e.value.status));
  console.log("\nData:\n");
  result.map((e) => console.log(e.value.data));
};

await performCalculations();
