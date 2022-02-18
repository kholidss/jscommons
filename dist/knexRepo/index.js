"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var clearRepo_1 = require("./clearRepo");
var migrate_1 = require("./migrate");
var rollback_1 = require("./rollback");
exports.default = (function (config) {
    return {
        clearRepo: (0, clearRepo_1.default)(config),
        migrate: (0, migrate_1.default)(config),
        rollback: (0, rollback_1.default)(config),
    };
});
//# sourceMappingURL=index.js.map