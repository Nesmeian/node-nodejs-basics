const parseEnv = () => {
  const envKeys = Object.keys(process.env).filter((e) => e.match("RSS_"));
  envKeys.map((e) => {
    console.log(`${e} = ${process.env[e]}`);
  });
};

parseEnv();
