"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
const admin = require("firebase-admin");
class Helper {
    static getUnixDate(date) {
        return new Date(date).getTime();
    }
    static validateRequest(req, next, schema) {
        const options = {
            abortEarly: false,
            allowUnknown: true,
            stripUnknown: true // remove unknown props
        };
        const { error, value } = schema.validate(req.body, options);
        if (error) {
            next(`Validation error: ${error.details.map((x) => x.message).join(', ')}`);
        }
        else {
            req.body = value;
            next();
        }
    }
}
exports.Helper = Helper;
Helper.firestore_ref = admin.firestore();
Helper.meeting_ref = Helper.firestore_ref.collection("meetings");
//# sourceMappingURL=helper.js.map