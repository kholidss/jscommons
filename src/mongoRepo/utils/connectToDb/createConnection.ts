import { MongoClient } from 'mongodb';
import Config from './Config';
import Connection from './Connection';
import handleJoiningReplica from './handleJoiningReplica';
import handleLeavingReplica from './handleLeavingReplica';
import retryConnection from './retryConnection';

export default async (config: Config, retries = 0): Promise<Connection> => {
  try {
    const client = await MongoClient.connect(config.url);
    const db = client.db(config.dbName);
    // tslint:disable-next-line:no-console
    console.log(`Created new Mongo connection`);
    (db as any).s.topology.once('left', handleLeavingReplica(config));
    (db as any).s.topology.once('joined', handleJoiningReplica);
    return { client, db };
  } catch (err) {
    // tslint:disable-next-line:no-console
    console.error(`Failed Mongo connection: ${err.message}`);
    return retryConnection(config, retries + 1);
  }
};
