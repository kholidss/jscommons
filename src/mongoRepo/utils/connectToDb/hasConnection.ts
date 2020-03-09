import Connection from './Connection';

export default async (dbName: string, connection: Promise<Connection> | undefined) => {
  if (connection === undefined) {
    return false;
  }
  try {
    const { client } = await connection;
    return client.isConnected(dbName);
  } catch (err) {
    return false;
  }
};
