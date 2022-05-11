"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
const config_1 = require("./config");
admin.initializeApp({
    credential: admin.credential.cert(config_1.APP_CONFIG.FIREBASE)
});
const api_1 = require("./api/api");
api_1.default.listen(config_1.APP_CONFIG.PORT, () => {
    console.log(`EXPRESS APP LISTENING ON PORT ${config_1.APP_CONFIG.PORT}`);
});
exports.default = api_1.default;
//# sourceMappingURL=index.js.map