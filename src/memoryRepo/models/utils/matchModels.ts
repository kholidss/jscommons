import { isMatch } from 'lodash';
import Match from '../../../repoFactory/models/Match';
import Model from '../../../utils/Model';

export default <R>(models: Model<R>[], match: Match<R>): Model<R>[] => {
  const predicate = (model: Model<R>) => isMatch(model, match);
  return models.filter(predicate);
};
