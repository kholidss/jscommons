"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stringPath_1 = require("./utils/stringPath");
var translator = {
    forbiddenError: function () { return 'Forbidden'; },
    invalidAuthError: function (err) { return "Invalid auth '".concat(err.auth, "'"); },
    noModelError: function (err) { return "No ".concat(err.modelName, " found"); },
    requiredWarning: function (warning) {
        var path = (0, stringPath_1.default)(warning.path);
        return "Missing required value in '".concat(path, "'");
    },
    restrictedKeysWarning: function (warning) {
        var path = (0, stringPath_1.default)(warning.path);
        var keys = warning.keys.join(', ');
        return "Unknown keys (".concat(keys, ") set in '").concat(path, "'");
    },
    serverError: function () { return 'A server error occurred'; },
    typeWarning: function (warning) {
        var path = (0, stringPath_1.default)(warning.path);
        var typeName = warning.type.name;
        var dataString = JSON.stringify(warning.data);
        return "Expected '".concat(path, "' to be '").concat(typeName, "'. Received '").concat(dataString, "'");
    },
    unauthorisedError: function () { return 'Unauthorised'; },
    warning: function (warning) {
        var path = (0, stringPath_1.default)(warning.path);
        var dataString = JSON.stringify(warning.data);
        return "Problem in '".concat(path, "'. Received '").concat(dataString, "'");
    },
};
exports.default = translator;
//# sourceMappingURL=en.js.map