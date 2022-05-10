
import * as express from 'express';
import { Response } from '../models/response';
import * as admin from 'firebase-admin';
import { Helper } from '../../helper';


export class ApiController {
    constructor(
        public app = express.Router(),

    ) {

        app.post('/schedule', async (req, res) => {

            console.log(req.body);
            let request_data = req.body;
            console.log(new Date(req.body.start));

            const unix_start_new = Helper.getUnixDate(request_data.start);
            const unix_end_new = Helper.getUnixDate(request_data.end);

            // only add meeting when it satisfies the condition
            const meetings_data = await Helper.meeting_ref.where('users', 'array-contains-any', [{ id: request_data.schedulingUser.id.toString(), username: request_data.schedulingUser.username.toLowerCase() },
            { id: request_data.scheduledUser.id.toString(), username: request_data.scheduledUser.username.toLowerCase() }]).get();

            const meetings = meetings_data.docs.map(snap => {
                return { id: snap.id, start: Helper.getUnixDate(snap.data().start.toDate()), end: Helper.getUnixDate(snap.data().end.toDate()) }
            })

            // console.log(meetings);
            // console.log(meetings.filter(meeting => ((unix_start_new < meeting.start && unix_end_new < meeting.start) || (unix_start_new > meeting.start && unix_start_new > meeting.end))))
            // console.log(meetings.length && !(meetings.filter(meeting => ((unix_start_new < meeting.start && unix_end_new < meeting.start) || (unix_start_new > meeting.start && unix_start_new > meeting.end))).length))

            if (meetings.length && (meetings.filter(meeting =>
                !((unix_start_new <= meeting.start && unix_end_new <= meeting.start)
                    || (unix_start_new >= meeting.start && unix_start_new >= meeting.end))
            ).length
            )) {
                return res.json(new Response(false, "User already has a meeting in this time slot"))
            }
            await Helper.meeting_ref.add({
                start: admin.firestore.Timestamp.fromDate(new Date(request_data.start)),
                end: admin.firestore.Timestamp.fromDate(new Date(request_data.end)),
                users: [{ id: request_data.schedulingUser.id.toString(), username: request_data.schedulingUser.username.toLowerCase() },
                { id: request_data.scheduledUser.id.toString(), username: request_data.scheduledUser.username.toLowerCase() }]
            })

            return res.json(new Response(true, "Meeting has been scheduled"));
        });


        app.get('/meetings/:user_id/:username', async (req, res) => {

            const user_id = req.params.user_id.toString();
            const username = req.params.username.toLowerCase();

            const meetings_data = await Helper.meeting_ref.where('users', 'array-contains', { id: user_id, username }).get();
            const meetings = meetings_data.docs.map(snap => {
                let data = snap.data()
                return { id: snap.id, start: data.start.toDate(), end: data.end.toDate(), users: data.users }
            })
            res.json(new Response(true, meetings))
        })

        app.delete('/delete/:meeting_id', async (req, res) => {

            const meeting_id = req.params.meeting_id.toString();
            const meetings_data = await Helper.meeting_ref.doc(meeting_id).delete()
            console.log(meetings_data)
            res.json(new Response(true, meetings_data))
        })
    }
}
