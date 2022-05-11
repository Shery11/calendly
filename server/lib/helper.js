"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
const admin = require("firebase-admin");
class Helper {
    static getUnixDate(date) {
        return new Date(date).getTime();
    }
    static async getUsersMeetings(schedulingUser, scheduledUser) {
        const meetings_data = await Helper.meeting_ref.where('users', 'array-contains-any', [{ id: schedulingUser.id.toString(), username: schedulingUser.username.toLowerCase() },
            { id: scheduledUser.id.toString(), username: scheduledUser.username.toLowerCase() }]).get();
        return meetings_data.docs.map(snap => {
            return { id: snap.id, start: Helper.getUnixDate(snap.data().start.toDate()), end: Helper.getUnixDate(snap.data().end.toDate()) };
        });
    }
    static addNewMeeting(start, end, schedulingUser, scheduledUser) {
        return Helper.meeting_ref.add({
            start: admin.firestore.Timestamp.fromDate(new Date(start)),
            end: admin.firestore.Timestamp.fromDate(new Date(end)),
            users: [{ id: schedulingUser.id.toString(), username: schedulingUser.username.toLowerCase() },
                { id: scheduledUser.id.toString(), username: scheduledUser.username.toLowerCase() }]
        });
    }
}
exports.Helper = Helper;
Helper.firestore_ref = admin.firestore();
Helper.meeting_ref = Helper.firestore_ref.collection("meetings");
//# sourceMappingURL=helper.js.map