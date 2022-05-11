import * as admin from 'firebase-admin';

export class Helper {
    static firestore_ref = admin.firestore()
    static meeting_ref = Helper.firestore_ref.collection("meetings");

    static getUnixDate(date: Date) {
        return new Date(date).getTime()
    }

    static async getUsersMeetings(schedulingUser: any, scheduledUser: any) {
        const meetings_data = await Helper.meeting_ref.where('users', 'array-contains-any', [{ id: schedulingUser.id.toString(), username: schedulingUser.username.toLowerCase() },
        { id: scheduledUser.id.toString(), username: scheduledUser.username.toLowerCase() }]).get();

        return meetings_data.docs.map(snap => {
            return { id: snap.id, start: Helper.getUnixDate(snap.data().start.toDate()), end: Helper.getUnixDate(snap.data().end.toDate()) }
        })
    }

    static addNewMeeting(start: string, end: string, schedulingUser: any, scheduledUser: any) {
        return Helper.meeting_ref.add({
            start: admin.firestore.Timestamp.fromDate(new Date(start)),
            end: admin.firestore.Timestamp.fromDate(new Date(end)),
            users: [{ id: schedulingUser.id.toString(), username: schedulingUser.username.toLowerCase() },
            { id: scheduledUser.id.toString(), username: scheduledUser.username.toLowerCase() }]
        })
    }
}