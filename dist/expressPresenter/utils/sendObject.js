"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (_a) {
    var res = _a.res, code = _a.code, errorId = _a.errorId, obj = _a.obj;
    return res.status(code).json(__assign({ errorId: errorId }, obj));
});
//# sourceMappingURL=sendObject.js.map