"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = exports.app = void 0;
const admin = require("firebase-admin");
const config_1 = require("./config");
admin.initializeApp({
    credential: admin.credential.cert(config_1.APP_CONFIG.FIREBASE)
});
const api_1 = require("./api/api");
exports.app = api_1.default;
const server = api_1.default.listen(config_1.APP_CONFIG.PORT, () => {
    console.log(`EXPRESS APP LISTENING ON PORT ${config_1.APP_CONFIG.PORT}`);
});
exports.server = server;
//# sourceMappingURL=index.js.map