import Config from './Config';
import createConnection from './createConnection';

export default (config: Config) => (role: string, server: any) => {
  // tslint:disable-next-line:no-console
  console.info(`A ${role} server (${server.ismaster.me}) left the replica set`);
  const connection = createConnection(config);
  connection.catch((err) => {
    // tslint:disable-next-line:no-console
    console.error(`Failed Mongo connection after server left the replica: ${err.message}`);
  });
  config.setConnection(connection);
};
