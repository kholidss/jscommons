import Model from '../../utils/Model';

type Sort<Record extends Object> = {
  readonly [P in keyof Model<Record>]: boolean;
};

export default Sort;
