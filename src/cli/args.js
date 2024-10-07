const parseArgs = () => {
  const args = process.argv.slice(2);
  let keys = args.filter((e) => e.match("--"));
  let values = args.filter((e) => !e.match("--"));
  keys.forEach((e, i) => {
    console.log(`${e.slice(2)} is ${values[i]}`);
  });
};

parseArgs(); //to run script use  (npm run cli:args) in terminal
