import yargs, { Arguments } from 'yargs';

const config: { ip: string; port: number } = {
    ip: '127.0.0.1',
    port: 8080,
  };
  
  /*
      Configuration can be overriden when calling distribution.js
      with the --config flag
  */
  const args: Arguments = yargs.argv;
  if (args.config) {
    const newConfig = JSON.parse(args.config as string);
    config.ip = newConfig.ip;
    config.port = parseInt(newConfig.port as string);
  }
  
  export default config;