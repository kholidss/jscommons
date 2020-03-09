import Connection from './Connection';

export default interface Config {
  readonly url: string;
  readonly dbName: string;
  readonly setConnection: (connection: Promise<Connection>) => void;
}
