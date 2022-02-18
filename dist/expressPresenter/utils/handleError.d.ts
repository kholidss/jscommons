import { Response } from 'express';
import Config from '../Config';
export interface Options {
    readonly config: Config;
    readonly errorId: string;
    readonly res: Response;
    readonly err: any;
}
declare const _default: ({ config, errorId, res, err }: Options) => Response;
export default _default;
