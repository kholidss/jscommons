"use strict";
// import { LoggerInstance } from 'winston';
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (_logger) {
    var handleExit = function (event) {
        return function (error) {
            if (error !== undefined) {
                console.log(error.stack);
            }
            console.log(event);
            process.exit();
        };
    };
    if (process.send !== undefined) {
        console.log('Process ready');
        process.send('ready');
    }
    process.on('exit', handleExit('exit'));
    process.on('SIGINT', handleExit('SIGINT'));
    process.on('SIGTERM', handleExit('SIGTERM'));
    process.on('uncaughtException', handleExit('uncaughtException'));
});
//# sourceMappingURL=handleListen.js.map