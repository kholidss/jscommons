"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rulr_1 = require("rulr");
var Forbidden_1 = require("../../errors/Forbidden");
var InvalidAuth_1 = require("../../errors/InvalidAuth");
var NoModel_1 = require("../../errors/NoModel");
var Unauthorised_1 = require("../../errors/Unauthorised");
var sendMessage_1 = require("../utils/sendMessage");
var sendObject_1 = require("../utils/sendObject");
var translateWarning_1 = require("../utils/translateWarning");
exports.default = (function (_a) {
    var config = _a.config, errorId = _a.errorId, res = _a.res, err = _a.err;
    var translator = config.translator, logger = config.logger;
    var logError = function (msg, meta) {
        console.log("".concat(errorId, ": jscommons handled - ").concat(msg), meta);
    };
    if (err instanceof InvalidAuth_1.default) {
        var code = 400;
        var message = translator.invalidAuthError(err);
        return (0, sendMessage_1.default)({ res: res, code: code, errorId: errorId, message: message });
    }
    if (err instanceof rulr_1.Warnings) {
        var code = 400;
        var warnings = err.warnings;
        var strWarnings = warnings.map(function (warning) {
            return (0, translateWarning_1.default)(translator, warning);
        });
        var obj = { warnings: strWarnings };
        return (0, sendObject_1.default)({ res: res, code: code, errorId: errorId, obj: obj });
    }
    if (err instanceof NoModel_1.default) {
        var code = 404;
        var message = translator.noModelError(err);
        return (0, sendMessage_1.default)({ res: res, code: code, errorId: errorId, message: message });
    }
    if (err instanceof Unauthorised_1.default) {
        var code = 401;
        var message = translator.unauthorisedError(err);
        return (0, sendMessage_1.default)({ res: res, code: code, errorId: errorId, message: message });
    }
    if (err instanceof Forbidden_1.default) {
        var code = 403;
        var message = translator.forbiddenError(err);
        return (0, sendMessage_1.default)({ res: res, code: code, errorId: errorId, message: message });
    }
    {
        var code = 500;
        var message = translator.serverError();
        logError(message, err);
        return (0, sendMessage_1.default)({ res: res, code: code, errorId: errorId, message: message });
    }
});
//# sourceMappingURL=handleError.js.map