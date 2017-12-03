import Idable from './Idable';

type Model<Record extends Object> = Record & Idable;

export default Model;
