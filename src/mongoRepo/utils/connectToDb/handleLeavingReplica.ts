import Config from './Config';
import createConnection from './createConnection';

export default (config: Config) => (role: string, server: any) => {
  console.log(`A ${role} server (${server.ismaster.me}) left the replica set`);
  const connection = createConnection(config);
  connection.catch((err) => {
    console.log(`Failed Mongo connection after server left the replica: ${err.message}`);
  });
  config.setConnection(connection);
};
