"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Response = void 0;
class Response {
    constructor(success, data) {
        this.success = success;
        this.data = success ? data : null;
        this.error = success ? null : data;
    }
}
exports.Response = Response;
//# sourceMappingURL=response.js.map