"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var handleCustomRoute_1 = require("./handleCustomRoute");
var cors_1 = require("./mixins/cors");
var helmet_1 = require("./mixins/helmet");
var json_1 = require("./mixins/json");
var morgan_1 = require("./mixins/morgan");
var urlEncoding_1 = require("./mixins/urlEncoding");
exports.default = (function (config) {
    var router = (0, express_1.Router)();
    router.use((0, cors_1.default)());
    router.use((0, json_1.default)(config.bodyParserLimit));
    router.use((0, urlEncoding_1.default)(config.bodyParserLimit));
    router.use((0, helmet_1.default)());
    router.use((0, morgan_1.default)(config.morganDirectory));
    router.get("/".concat(config.customRoute), (0, handleCustomRoute_1.default)(config));
    return router;
});
//# sourceMappingURL=index.js.map