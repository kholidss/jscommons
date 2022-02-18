"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable-next-line:max-line-length
var regex = /^mongodb:\/\/(?:(?:[\-\w\d\%]+:[\-\w\d\%]+@)?[\-\w\d\%\.]+(?::\d+)?,?)*\/([\-\w\d\%]+)/i;
exports.default = (function (url) {
    var result = regex.exec(url);
    if (result === null) {
        return undefined;
    }
    return result[1];
});
//# sourceMappingURL=getDbFromUrl.js.map