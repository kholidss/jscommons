import Member from '../../utils/Member';
import Model from '../../utils/Model';
import Cursor from './Cursor';
import Match from './Match';
import Pagination from './Pagination';
import Sort from './Sort';

export interface Opts<R> {
  readonly match: Match<R>;
  readonly sort: Sort<R>;
  readonly pagination: Pagination;
}

export interface Result<R> {
  readonly models: Model<R>[];
  readonly forwardCursor: Cursor;
  readonly backwardCursor: Cursor;
}

type Signature<R> = Member<Opts<R>, Result<R>>;

export default Signature;
