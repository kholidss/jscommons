"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createConnection_1 = require("./createConnection");
exports.default = (function (config) { return function (role, server) {
    console.log("A ".concat(role, " server (").concat(server.ismaster.me, ") left the replica set"));
    var connection = (0, createConnection_1.default)(config);
    connection.catch(function (err) {
        console.log("Failed Mongo connection after server left the replica: ".concat(err.message));
    });
    config.setConnection(connection);
}; });
//# sourceMappingURL=handleLeavingReplica.js.map