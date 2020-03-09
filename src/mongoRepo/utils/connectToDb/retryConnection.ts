import { delay } from 'bluebird';
import Config from './Config';
import Connection from './Connection';
import createConnection from './createConnection';

const maxRetries = 3;
const retryGapMS = 1000;

export default async (config: Config, retries: number): Promise<Connection> => {
  if (retries > maxRetries) {
    throw new Error('Too many retries');
  }
  // tslint:disable-next-line:no-console
  console.log(`Starting retry ${retries} in ${retryGapMS}ms`);
  await Promise.resolve(delay(retryGapMS));
  return createConnection(config, retries);
};
