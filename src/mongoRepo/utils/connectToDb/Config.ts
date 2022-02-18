// import { LoggerInstance } from 'winston';
import Connection from './Connection';

export default interface Config {
  readonly maxRetries: number;
  readonly retryGapMS: number;
  readonly logger: any;
  readonly url: string;
  readonly dbName: string;
  readonly setConnection: (connection: Promise<Connection>) => void;
}
