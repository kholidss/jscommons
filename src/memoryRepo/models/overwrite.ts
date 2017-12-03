import { Opts, Result } from '../../repoFactory/models/OverwriteSignature';
import Config from './Config';
import patch from './patch';

export default <R>(config: Config<R>) => {
  return async ({ id, record }: Opts<R>): Promise<Result<R>> => {
    return patch(config)({ id, patch: record });
  };
};
