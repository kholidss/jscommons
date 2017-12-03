import { last } from 'lodash';
import Cursor from '../../../repoFactory/models/Cursor';
import Model from '../../../utils/Model';

export default <R>(models: Model<R>[]): Cursor => {
  const lastModel = last(models);
  if (lastModel === undefined) {
    return undefined;
  }
  return lastModel.id;
};
