"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin = require("firebase-admin");
const config_1 = require("./config");
admin.initializeApp({
    credential: admin.credential.cert(config_1.APP_CONFIG.FIREBASE)
});
const api = require("./api/api");
api.expressApp.listen(config_1.APP_CONFIG.PORT, () => {
    console.log(`EXPRESS APP LISTENING ON PORT ${config_1.APP_CONFIG.PORT}`);
});
//# sourceMappingURL=index.js.map