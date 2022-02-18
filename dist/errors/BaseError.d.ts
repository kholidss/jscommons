export default class implements Error {
    readonly name: string;
    readonly message: string;
    readonly stack?: string;
    constructor();
}
