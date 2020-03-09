import { Db } from 'mongodb';
import Connection from './Connection';
import getConnection from './getConnection';

export default (opts: {
  readonly url: string;
  readonly dbName: string;
}) => {
  let connection: Promise<Connection>; // tslint:disable-line:no-let
  const setConnection = (newConnection: Promise<Connection>) => {
    connection = newConnection;
  };
  const connectToDb = async (): Promise<Db> => {
    setConnection(getConnection({
      url: opts.url,
      dbName: opts.dbName,
      setConnection,
    }, connection));
    return (await connection).db;
  };
  connectToDb().catch((err) => {
    // tslint:disable-next-line:no-console
    console.error(`Failed initial mongo connection: ${err.message}`);
  });
  return connectToDb;
};
