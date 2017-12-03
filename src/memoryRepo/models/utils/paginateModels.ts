import { take, takeRight, takeRightWhile, takeWhile } from 'lodash';
import Pagination from '../../../repoFactory/models/Pagination';
import Model from '../../../utils/Model';

export default <R>(models: Model<R>[], pagination: Pagination): Model<R>[] => {
  const predicate = (model: Model<R>) => model.id !== pagination.cursor;
  if (pagination.forward) {
    return take(takeRightWhile(models, predicate), pagination.limit);
  } else {
    return takeRight(takeWhile(models, predicate), pagination.limit);
  }
};
