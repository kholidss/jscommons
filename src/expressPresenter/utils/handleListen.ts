// import { LoggerInstance } from 'winston';

export default (_logger: any) => {
  const handleExit = (event: string) => {
    return (error?: any) => {
      if (error !== undefined) {
        console.log(error.stack);
      }
      console.log(event);
      process.exit();
    };
  };

  if (process.send !== undefined) {
    console.log('Process ready');
    process.send('ready');
  }

  process.on('exit', handleExit('exit'));
  process.on('SIGINT', handleExit('SIGINT'));
  process.on('SIGTERM', handleExit('SIGTERM'));
  process.on('uncaughtException', handleExit('uncaughtException'));
};
