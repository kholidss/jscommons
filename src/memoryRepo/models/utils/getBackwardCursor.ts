import { first } from 'lodash';
import Cursor from '../../../repoFactory/models/Cursor';
import Model from '../../../utils/Model';

export default <R>(models: Model<R>[]): Cursor => {
  const firstModel = first(models);
  if (firstModel === undefined) {
    return undefined;
  }
  return firstModel.id;
};
