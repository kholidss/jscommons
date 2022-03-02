import { MongoClient } from 'mongodb';
import Config from './Config';
import Connection from './Connection';
import handleJoiningReplica from './handleJoiningReplica';
import handleLeavingReplica from './handleLeavingReplica';
import retryConnection from './retryConnection';

export default async (config: Config, retries = 0): Promise<Connection> => {
  try {
    console.log(`Creating Mongo connection ...`);
    const client = await MongoClient.connect(config.url, {tlsAllowInvalidCertificates: true});
    const db = client.db(config.dbName);
    console.log(`Created new Mongo connection`);
    (db as any).s.topology.once('left', handleLeavingReplica(config));
    (db as any).s.topology.once('joined', handleJoiningReplica(config));
    return { client, db };
  } catch (err: any) {
    console.log(`Failed Mongo connection: ${err.message}`);
    return retryConnection(config, retries + 1);
  }
};
