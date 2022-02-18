import { Db } from 'mongodb';
export interface Opts {
    readonly maxRetries?: number;
    readonly retryGapMS?: number;
    readonly logger: any;
    readonly url: string;
    readonly dbName: string;
}
declare const _default: ({ maxRetries, retryGapMS, logger, url, dbName, }: Opts) => () => Promise<Db>;
export default _default;
