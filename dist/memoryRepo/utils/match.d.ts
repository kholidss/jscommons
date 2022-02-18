declare type Op = (actual: any) => boolean;
declare const match: (filter: any) => Op;
export default match;
