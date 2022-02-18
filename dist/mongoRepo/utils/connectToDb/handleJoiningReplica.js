"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (config) { return function (role, server) {
    console.log("A ".concat(role, " server joined the replica set"), server.me, config);
}; });
//# sourceMappingURL=handleJoiningReplica.js.map