"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
exports.default = (function (limit) {
    return bodyParser.json({
        limit: limit,
        strict: false,
        type: 'application/json',
    });
});
//# sourceMappingURL=json.js.map