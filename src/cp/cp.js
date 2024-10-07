import url from "url";
import path from "path";
import { spawn } from "node:child_process";
const spawnChildProcess = async (args) => {
  const currentPathDir = path.dirname(url.fileURLToPath(import.meta.url));
  const scriptPath = path.join(currentPathDir, "files", "script.js");
  const childProcess = spawn(process.execPath, [scriptPath, ...args], {
    stdio: ["pipe", "pipe", "inherit"],
  });
  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);

  return childProcess;
};

spawnChildProcess(["someArgument1", "someArgument2"]);
